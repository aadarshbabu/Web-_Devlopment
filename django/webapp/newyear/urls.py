from django.urls import path
from . import views

app_name="newyear" # it is the namespace for this url
urlpatterns=[
    path('newyear/',views.newyear, name="newyear"),
    path('date/',views.date, name="date")
]