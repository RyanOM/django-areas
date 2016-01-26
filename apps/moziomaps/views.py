from django.shortcuts import render, render_to_response, redirect
from django.http import JsonResponse

from forms import CompanyForm
from models import Company, ServiceArea


# Create your views here.
def RegisterView(request):
    if request.method == 'POST':
        form = CompanyForm(request.POST)
        if form.is_valid():
            create_service_area(form.cleaned_data['name'], form.cleaned_data['json_coordinates'])
            redirect('/')
            return

        # Show errors
        errors = form.errors
        return render(request, 'register.html', {"errors": errors})

    return render(request, 'register.html')

def LookupView(request):
    return render(request, 'lookup.html')

def LookupApi(request):
    # Extract coordinates from request
    lat, lng = "32", "33"

    # Find matches in database

    # Return matches
    return JsonResponse(["Microsoft"])

def create_service_area(name, json_coordinates):
    # Parse coordinates
    # TODO: parse it
    coordinates = json_coordinates

    # Get or create company
    company, created = Company.objects.get_or_create(name=name)

    # Create ServiceArea
    area = ServiceArea()
    area.company = company
    area.coordinates = coordinates

    company.save()
    area.save()