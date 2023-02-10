from django.contrib import admin
from .models import Todo

# Register your models here.


class TodoAdmin(admin.ModelAdmin):
    """
    List of a TODO to display in admin
    """
    list_display = ("todoTitle", "hrs", "mins")


admin.site.register(Todo, TodoAdmin)
