from django.db import models

# Create your models here.


class Todo(models.Model):
    """
    Database model for TODO
    """
    title = models.CharField(max_length=120)
    description = models.TextField()
    completed = models.BooleanField(default=False)
    created = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title