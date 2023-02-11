import datetime

from rest_framework import viewsets
from .serializers import TodoSerializer
from rest_framework import generics
from .models import Todo
from rest_framework.response import Response
import math
from rest_framework.decorators import api_view

# Create your views here.


@api_view(['GET'])
def get_stats(request):

    completed_tasks = Todo.objects.filter(completed=True).count()
    total_added_tasks = Todo.objects.all().count()

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
        "minutes": mins
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
