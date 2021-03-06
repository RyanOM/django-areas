# -*- coding: utf-8 -*-
# Generated by Django 1.9.1 on 2016-01-25 18:05
from __future__ import unicode_literals

import django.contrib.gis.db.models.fields
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Company',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('created_date', models.DateTimeField(auto_now_add=True)),
            ],
            options={
                'verbose_name_plural': 'Companies',
            },
        ),
        migrations.CreateModel(
            name='ServiceArea',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('polygon_area', django.contrib.gis.db.models.fields.PolygonField(srid=4326)),
                ('company', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='service_area', to='moziomaps.Company')),
            ],
        ),
    ]
