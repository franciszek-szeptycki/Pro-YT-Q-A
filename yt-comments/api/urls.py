from django.urls import path

from . import views

urlpatterns = [
    path('video/<str:video_id>/comments/', views.comments),
    path('stats/', views.website_stats),
    path('pdf/', views.pdf),
]
