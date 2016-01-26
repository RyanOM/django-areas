from django import forms
from models import Company, ServiceArea



class CompanyForm(forms.Form):
    name = forms.CharField(min_length=1)
    json_coordinates = forms.CharField(min_length=2)

