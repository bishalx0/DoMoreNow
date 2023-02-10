from rest_framework import serializers
from .models import Todo


class TodoSerializer(serializers.ModelSerializer):
    """
    Serialize model data into JSON and vice versa
    """
    class Meta:
        model = Todo
        fields = ("id", "todoTitle", "hrs", "mins", "work_time", "break_time", "work_cycle")
