from datetime import datetime
from django.db import models

# Create your models here.


class Todo(models.Model):
    """
    Database model for TODO
    """
    todoTitle = models.CharField(max_length=200)
    hrs = models.IntegerField()
    mins = models.IntegerField()
    work_time = models.IntegerField(null=True)
    break_time = models.IntegerField(null=True)
    work_cycle_frontend = models.IntegerField(default=0)
    work_cycle_backend = models.IntegerField(null=True)
    pause = models.JSONField(null=True)
    completed = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


    def __str__(self):
        return self.todoTitle


class Pause(models.Model):
    task_id = models.IntegerField()
    pause_count = models.IntegerField(default=0)


class Subject(models.Model):
    name = models.CharField(max_length=200)
    credit = models.IntegerField()
