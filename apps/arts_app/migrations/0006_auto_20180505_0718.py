# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2018-05-05 07:18
from __future__ import unicode_literals

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('arts_app', '0005_auto_20180505_0712'),
    ]

    operations = [
        migrations.AlterField(
            model_name='art',
            name='a_content',
            field=models.TextField(verbose_name='文章内容'),
        ),
        migrations.AlterField(
            model_name='art',
            name='a_createtime',
            field=models.DateTimeField(db_index=True, default=django.utils.timezone.now, verbose_name='创建时间'),
        ),
        migrations.AlterField(
            model_name='art',
            name='a_img',
            field=models.ImageField(blank=True, null=True, upload_to='uploads', verbose_name='封面'),
        ),
        migrations.AlterField(
            model_name='art',
            name='a_updatetime',
            field=models.DateTimeField(default=django.utils.timezone.now, verbose_name='更新时间'),
        ),
        migrations.AlterField(
            model_name='tag',
            name='t_createtime',
            field=models.DateTimeField(db_index=True, default=django.utils.timezone.now, verbose_name='创建时间'),
        ),
    ]
