#!/usr/bin/env python  
# encoding: utf-8  
from django.shortcuts import render


def HtmlHandler(request):
	#context={"username":"jingtao", "address":'beijing'}
	return render(request, "home/test.html")

