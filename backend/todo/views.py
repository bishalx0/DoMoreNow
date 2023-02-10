from rest_framework import viewsets
from .serializers import TodoSerializer
from .models import Todo

# Create your views here.


class TodoView(viewsets.ModelViewSet):
    """
    TODO API view
    """
    serializer_class = TodoSerializer
    queryset = Todo.objects.all()