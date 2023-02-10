from rest_framework import serializers
from .models import Todo


class TodoSerializer(serializers.ModelSerializer):
    """
    Serialize model data into JSON and vice versa
    """
    class Meta:
        model = Todo
        fields = ("id", "title", "description", "created", "completed")
