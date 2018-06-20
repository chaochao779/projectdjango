#!/usr/bin/env python  
# encoding: utf-8  

from django.shortcuts import render, HttpResponse
from arts_app.models import Student


def StudentHandler(request):
	'''
	:param request: 网络URL封装输入对象
	:return: 学生信息JSON
	'''
	stduents = Student.objects.all()
	import json
	res_list = []
	for st in stduents:
		res_dict = {'name':st.st_name, 'age':st.st_age,
					'address':st.st_address, 'sex':st.st_sex,
					}
		res_list.append(res_dict)
	return HttpResponse(json.dumps(res_list))



