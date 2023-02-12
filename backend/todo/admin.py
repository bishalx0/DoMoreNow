from django.contrib import admin
from .models import Todo, Pause,Subject

# Register your models here.


class TodoAdmin(admin.ModelAdmin):
    """
    List of a TODO to display in admin
    """
    list_display = ("id", "todoTitle", "hrs", "mins", "work_time", "break_time", "work_cycle_frontend", "work_cycle_backend", "pause", "completed", "created_at", "updated_at")


class PauseAdmin(admin.ModelAdmin):
    list_display = ("id", "task_id", "pause_count")


class SubjectAdmin(admin.ModelAdmin):
    list_display = ("id", "name", "credit")


admin.site.register(Todo, TodoAdmin)
admin.site.register(Pause, PauseAdmin)
admin.site.register(Subject, SubjectAdmin)
