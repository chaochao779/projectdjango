# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2018-05-05 02:04
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('arts_app', '0002_auto_20180505_0201'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='student',
            options={'ordering': ['-st_age']},
        ),
        migrations.AlterModelTable(
            name='student',
            table='student',
        ),
    ]
