from django.contrib import admin
from .models import Todo

# Register your models here.


class TodoAdmin(admin.ModelAdmin):
    """
    List of a TODO to display in admin
    """
    list_display = ("todoTitle", "hrs", "mins", "work_time", "break_time", "work_cycle")


admin.site.register(Todo, TodoAdmin)
