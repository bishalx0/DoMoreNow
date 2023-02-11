from django.urls import path, include
from . import views

urlpatterns = [
    path('todos/', views.TodoList.as_view(), name='todo_list'),
    path('todos/<int:pk>/', views.TodoDetail.as_view(), name='todo_detail'),
    path("stats/", views.get_stats, name="get_stats")
]
