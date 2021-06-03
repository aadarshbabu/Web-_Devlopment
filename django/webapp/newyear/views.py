from django.shortcuts import render
import datetime

# Create your views here.
def newyear(request):
    now = datetime.datetime.now()
    newyear=False
    if now.year==1 and now.month==1:
        newyear=True

    return render(request,'newyear/newyear.html',{  
            "newyear": newyear
    })

def date(request):
    now = datetime.datetime.now().replace(microsecond=0)
    expeted= datetime.datetime(2022,1,1,0,0,0)
    return render(request, 'newyear/date.html',{
    
        "nextNewYear" : (expeted-now),
        "now": now
    })