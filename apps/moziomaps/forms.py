from django import forms
from models import Company, ServiceArea



class CompanyForm(forms.ModelForm):
    class Meta:
        model = Company
        fields = '__all__'
