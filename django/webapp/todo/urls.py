
from django.urls import path
from . import views
app_name="todo"
urlpatterns=[
    path("",views.todolist, name="todolist"),
    path("add/",views.addtast, name="add"),

]