from django.shortcuts import render, render_to_response
from forms import CompanyForm


# Create your views here.
def RegisterView(request):
    if request.method == 'POST':
        data = {}
        form = CompanyForm(data)
        if form.is_valid():
            form.save()
    return render_to_response('register.html')
