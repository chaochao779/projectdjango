# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2018-05-05 02:01
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('arts_app', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='student',
            name='st_age',
            field=models.IntegerField(default=0),
        ),
        migrations.AlterField(
            model_name='student',
            name='id',
            field=models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
    ]
