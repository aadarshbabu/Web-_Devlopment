from django.shortcuts import render
from django import forms
from django.http import HttpResponseRedirect
from django.urls import reverse
class todoform(forms.Form):
    formvar=forms.CharField(label="Add Tasks") #formvar is required to create a from object..
    # formvar is contain the Html element. when you call create the object in todoform class formvar print

# Create your views here.


def todolist(request):
    if "tasks" not in request.session:
        request.session["tasks"] = []

    return render(request,"todo/todolist.html",{
        "tasks":request.session["tasks"]
    })


def addtast(request):
    if request.method=="POST": # way to chacking the request method
        form= todoform(request.POST)
        if form.is_valid(): # this method is check form is valid or not
            task= form.cleaned_data["formvar"] # retrive the form data.
            request.session["tasks"] += [task]
            return HttpResponseRedirect(reverse("todo:todolist"))
        else:
            return render(request, "todo/todolist.html",{
                "form":todoform()
            })

    return render(request,"todo/add.html",{
        "form": todoform()
    })
