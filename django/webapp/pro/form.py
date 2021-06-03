from django import forms
from django.forms.fields import EmailField
from django.forms.widgets import EmailInput
class submitdata(forms.Form):
    """submitdata definition."""
    ids = forms.IntegerField()
    name = forms.CharField(max_length = 150,label="Enter a name")
    email= forms.EmailField(required=True)
    

    # TODO: Define form fields here