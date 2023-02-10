from datetime import timezone

from django.db import models

# Create your models here.


class Todo(models.Model):
    """
    Database model for TODO
    """
    todoTitle = models.CharField(max_length=200)
    hrs = models.IntegerField()
    mins = models.IntegerField()

    def __str__(self):
        return self.title