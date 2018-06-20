# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2018-05-05 01:49
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Student',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='学生ID')),
                ('st_name', models.CharField(max_length=10, verbose_name='学生姓名')),
                ('st_sex', models.BooleanField(default=1)),
                ('st_address', models.CharField(max_length=10, verbose_name='地址')),
                ('st_email', models.EmailField(max_length=254, verbose_name='邮箱地址')),
            ],
        ),
    ]
