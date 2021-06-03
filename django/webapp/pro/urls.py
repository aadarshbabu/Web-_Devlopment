import django
from django.contrib import admin
from django.urls import path , include
from . import views
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'api',views.testviweset)


urlpatterns = [
    #this url pattern is the web app..
    path('', views.index, name="index"),
    path('', include(router.urls)),
    
]