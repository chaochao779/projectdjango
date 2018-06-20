# -*- coding: utf-8 -*-
__author__ = 'zhougy'
__date__ = '2018/5/8 下午8:06'

from django.conf.urls import url
from .views import MessageSubmit

urlpatterns = [
	url(r'^$', MessageSubmit, name='go_form'),
]
