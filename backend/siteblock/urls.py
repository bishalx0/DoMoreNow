from django.urls import path, include
from . import views

urlpatterns = [
    # path('sites/', views.SiteList.as_view(), name='site_list'),
    # path('sites/<int:pk>/', views.SiteDetail.as_view(), name='site_detail'),

path('sites/', views.SiteView.as_view(), name='site-view'),

]
