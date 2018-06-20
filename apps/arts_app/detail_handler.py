#!/usr/bin/env python  
# encoding: utf-8

from django.shortcuts import render
from django.http import HttpResponseRedirect
from .models import Art

'''
接口URL：  /art/detail?id=7
      方法：GET
      输入参数说明：
          id： 化妆品id，（点击某一个具体的文章，传入文章id)
     输出：
          渲染详情页面
'''

def DetailHandler(request):
	article_id = request.GET.get('id', None)
	if article_id == None:
		return HttpResponseRedirect('/art/index')
	else:
		art = Art.objects.get(id = int(article_id))
		context = {'art':art}
		return render(request, "home/detail.html", context=context)



