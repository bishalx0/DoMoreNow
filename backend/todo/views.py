from rest_framework import viewsets
from .serializers import TodoSerializer
from rest_framework import generics
from .models import Todo
from rest_framework.response import Response
import math

# Create your views here.


class TodoList(generics.ListCreateAPIView):
    """
    TODO API List view
    """
    serializer_class = TodoSerializer
    queryset = Todo.objects.all()


class TodoDetail(generics.RetrieveUpdateDestroyAPIView):
    """
    TODO API Details view
    """
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer

    def get(self, request, *args, **kwargs):
        todo = self.get_object()

        # show no. of cycle to user
        if todo.work_time and todo.break_time:
            hrs = todo.hrs
            mins = todo.mins
            total_time = mins + hrs * 60
            work_time = todo.work_time
            no_of_cycle = total_time / work_time
            todo.work_cycle = math.ceil(no_of_cycle)
            todo.save()

        return Response(TodoSerializer(todo).data)
