#!/usr/bin/env python  
# encoding: utf-8  
from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from .models import Art, Tag
from django.db.models import Q
'''
接口URL：  /art/search?key=XXX&page=1
方法：GET
输入参数说明：

          key: 搜索的关键词
          page: 获取第几页
输出：

          渲染搜索列表页面
'''

def SearchHandler(request):
	key = request.GET.get('key', '')
	page = int(request.GET.get('page', 1))
	total = 0
	if key == "":
		return HttpResponseRedirect('/art/index')
	else:
		art_sets = Art.objects.filter(Q(a_title__contains=str(key))
									| Q(a_info__contains=str(key))
									| Q(a_content__contains=str(key))).distinct()
		total = art_sets.count()
		shownum = 4
		import math
		pagenum = int(math.ceil(total/shownum))
		context = dict(
			pagenum = pagenum,
			total = total,
			prev = 1,
			next = 1,
			pagerange = range(1, 2),
			data = [],
			url = request.path,
			key = key,
			page = 1,
		)
		if page < 1:
			context.update(page=1)
			return render(request, "home/search.html", context=context)
		if page > pagenum:
			context.update(page=pagenum)
			return render(request, "home/search.html", context=context)
		offset = (page - 1) * shownum
		data = art_sets[offset:offset + shownum]

		btnum = 5
		if btnum > pagenum:
			firtpage = 1
			lastpage = pagenum
		else:
			if page == 1:
				firtpage = 1
				lastpage = btnum
			else:
				firtpage = page - 3
				lastpage = page + btnum
				if firtpage < 1:
					firtpage = 1
				if lastpage > pagenum:
					lastpage = pagenum
		prev = page - 1
		next = page + 1
		if prev < 1:
			prev = 1
		if next > pagenum:
			next = pagenum

		context = dict(
			pagenum=pagenum,
			total=total,
			prev=prev,
			next=next,
			pagerange=range(firtpage, lastpage + 1),
			data=data,
			url=request.path,
			page=page,
			key = key,
		)

	return render(request, "home/search.html", context=context)

