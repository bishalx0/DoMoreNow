import datetime

from rest_framework import viewsets
from .serializers import TodoSerializer, PauseSerializer
from rest_framework import generics
from .models import Todo, Pause
from rest_framework.response import Response
import math
from rest_framework.decorators import api_view
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse

# Create your views here.


@api_view(['GET', 'POST'])
def pause_view(request):
    if request.method == 'GET':
        pauses = Pause.objects.all()
        serializer = PauseSerializer(pauses, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        task_id = request.data.get('task_id')
        pause_count = request.data.get('pause_count')

        if not task_id or not pause_count:
            return Response({'error': 'Missing task_id or pause_count parameter'}, status=400)

        try:
            pause = Pause.objects.get(task_id=task_id)
            pause.pause_count += int(pause_count)
            pause.save()
            serializer = PauseSerializer(pause)
            return Response(serializer.data)
        except Pause.DoesNotExist:
            pause = Pause(task_id=task_id, pause_count=int(pause_count))
            pause.save()
            serializer = PauseSerializer(pause)
            return Response(serializer.data)

    else:
        return Response({'error': 'Unsupported HTTP method'}, status=405)


# @csrf_exempt
# def paused_view(request):
#     if request.method == 'GET':
#         # handle GET request
#         pauses = Pause.objects.all()
#         pause_data = [{'task_id': pause.task_id, 'pause_count': pause.pause_count} for pause in pauses]
#         return JsonResponse(pause_data, safe=False)
#
#     elif request.method == 'POST':
#         # handle POST request
#         request_data = request.POST
#         print(request_data)
#         task_id = request_data.get('task_id')
#         pause_count = request_data.get('pause_count')
#
#         if task_id is None or pause_count is None:
#             # missing required parameters
#             my_data = {'error': 'Missing start_time or end_time parameter'}
#             return JsonResponse(my_data, status=400)
#
#         for data in Pause.objects.all():
#             if data.task_id == task_id:
#                 data.pause_count += 1
#                 data.save()
#             else:
#                 pause = Pause(task_id=task_id, pause_count=pause_count)
#                 pause.save()
#
#         # return a success message with the new pause data
#         pause_data = {'message': 'Pause created'}
#         return JsonResponse(pause_data)
#
#     else:
#         # handle other HTTP methods
#         my_data = {'error': 'Unsupported HTTP method'}
#         return JsonResponse(my_data, status=405)


@api_view(['GET'])
def get_stats(request):

    completed_tasks = Todo.objects.filter(completed=True).count()
    total_added_tasks = Todo.objects.all().count()

    # count the no of pauses
    total_pause = 0
    pauses = Pause.objects.all()
    for data in pauses:
        total_pause += data.pause_count

    mins = 0
    hrs = 0
    for data in Todo.objects.filter(completed=True):
        hrs += data.hrs
        mins += data.mins

    # calculate number of streaks
    queryset = Todo.objects.filter(completed=True).order_by("-created_at")
    _date = datetime.date.today()
    streak = 0
    for row in queryset.iterator():
        date = row.created_at.date()
        streak += 1
        delta = _date - date
        if delta.days > 1:
            break

    data = {
        "streak": streak,
        "completed_task": completed_tasks,
        "added_task": total_added_tasks,
        "hours": hrs,
        "minutes": mins,
        "pause_count": total_pause
    }

    return Response(data)


class TodoList(generics.ListCreateAPIView):
    """
    TODO API List view
    """
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer

    def get(self, request, *args, **kwargs):
        todos = self.get_queryset()
        serializer = TodoSerializer(todos, many=True)
        # print(serializer.data)
        return Response(serializer.data)


class TodoDetail(generics.RetrieveUpdateDestroyAPIView):
    """
    TODO API Details view
    """
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer

    def put(self, request, *args, **kwargs):
        todo = self.get_object()
        todo.todoTitle = request.data.get("todoTitle")
        todo.hrs = request.data.get("hrs")
        todo.mins = request.data.get("mins")
        todo.work_time = request.data.get("work_time")
        todo.break_time = request.data.get("break_time")
        todo.work_cycle_frontend = request.data.get("work_cycle_frontend")
        todo.pause = request.data.get("pause")

        # calculate required cycle on the basic of above data
        hrs = todo.hrs
        mins = todo.mins
        total_time = mins + hrs * 60
        work_time = todo.work_time
        no_of_cycle = total_time / work_time
        work_cycle_backend = math.ceil(no_of_cycle)
        todo.work_cycle_backend = work_cycle_backend
        work_cycle_frontend = todo.work_cycle_frontend

        # check if task is completed or not
        if work_cycle_frontend == work_cycle_backend:
            todo.completed = True

        todo.save()
        return Response(TodoSerializer(todo).data)

    # def get(self, request, *args, **kwargs):
    #     todo = self.get_object()
    #
    #     # show no. of cycle to user
    #     if todo.work_time and todo.break_time:
    #         hrs = todo.hrs
    #         mins = todo.mins
    #         total_time = mins + hrs * 60
    #         work_time = todo.work_time
    #         no_of_cycle = total_time / work_time
    #         todo.work_cycle = math.ceil(no_of_cycle)
    #         todo.save()
    #
    #     return Response(TodoSerializer(todo).data)
