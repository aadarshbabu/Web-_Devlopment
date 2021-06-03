from django.db import models


# Create your models here.
class test(models.Model):
    tid= models.IntegerField()
    name = models.CharField(("Name"), max_length=50)
    email= models.EmailField(("email"), max_length=254)
   