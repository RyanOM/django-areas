from __future__ import unicode_literals

from django.db import models
from django.contrib.gis.db import models as gis_models


class Company(models.Model):
    name = models.CharField(max_length=200)
    created_date = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name_plural = 'Companies'

    def __unicode__(self):
        return self.name


class ServiceArea(models.Model):
    coordinates = models.CharField(max_length=1000, default='')
    company = models.ForeignKey(Company, related_name='service_area')
