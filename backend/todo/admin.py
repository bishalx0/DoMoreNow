from django.contrib import admin
from .models import Todo, Pause

# Register your models here.


class TodoAdmin(admin.ModelAdmin):
    """
    List of a TODO to display in admin
    """
    list_display = ("id", "todoTitle", "hrs", "mins", "work_time", "break_time", "work_cycle_frontend", "work_cycle_backend", "pause", "completed", "created_at", "updated_at")


class PauseAdmin(admin.ModelAdmin):
    list_display = ("id", "task_id", "pause_count")


admin.site.register(Todo, TodoAdmin)
admin.site.register(Pause, PauseAdmin)
