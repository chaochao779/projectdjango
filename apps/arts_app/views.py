from django.shortcuts import render, render_to_response
from django.shortcuts import HttpResponse

# Create your views here.

def hello_world(request):
	import json
	res = {
		'code':200,
		'data':'你好，欢迎您来参加活动！',
		'message':'ok'
	}
	return HttpResponse(json.dumps(res))


