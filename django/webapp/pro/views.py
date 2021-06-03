from django.shortcuts import render
from django.http import HttpResponse
from .models import test
from .form import submitdata
from rest_framework import viewsets
from .serializer import testserializer


class testviweset(viewsets.ModelViewSet):
    queryset= test.objects.all()
    serializer_class = testserializer


def index(request):
    form = submitdata()
    data= test.objects.all()
    data={"dat":data, "form":form}

    return render(request,"pro/index.html",data)