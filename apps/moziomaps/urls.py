from django.conf.urls import url

import views

urlpatterns = [
    url(r'^$', views.RegisterView, name='register_area'),
    url(r'^lookup$', views.LookupView, name='lookup_area'),
    url(r'^api/lookup$', views.LookupApi, name='api_lookup_area'),
]
