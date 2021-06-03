from django.contrib import admin
from .models import *
# Register your models here.
# admin.site.register(test)

@admin.register(test)
class text(admin.ModelAdmin):
    list_display=("id","name","email")
    