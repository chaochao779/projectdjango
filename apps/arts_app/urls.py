#!/usr/bin/env python  
# encoding: utf-8  

from django.conf.urls import url
from arts_app.views import hello_world
from arts_app.student_handler import StudentHandler
from arts_app.html_handler import HtmlHandler
from arts_app.index_handler import IndexHandler
from arts_app.search_handler import SearchHandler
from arts_app.detail_handler import DetailHandler

urlpatterns = [
	url(r'^index/$', IndexHandler),
    url(r'^search/$', SearchHandler),
	url(r'^detail/$', DetailHandler),
	url(r'^hello', hello_world),
	url(r'^show_stu', StudentHandler),
	url(r'^show_html', HtmlHandler),


]
