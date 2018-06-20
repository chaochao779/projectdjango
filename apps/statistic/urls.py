# -*- coding: utf-8 -*-  
__author__ = 'zhougy'
__date__ = '2018/5/9 上午11:19' 

from django.conf.urls import url
from .views import render_index, HistogramHandler, PieHandler

urlpatterns = [
	url(r'^html/$', render_index),
	url(r'^statics/$', HistogramHandler),
	url(r'^pie/$', PieHandler)
]
