from django.shortcuts import render, HttpResponse,HttpResponseRedirect
from .models import User


# Create your views here.

def login(request):
    username = request.POST.get('user1')
    password = request.POST.get('psw1')

    u = User.objects.all()
    for i in u:
        if i.username == username and i.password == password:
            return HttpResponseRedirect('/art/index/')

    return render(request, 'login.html')


def register(request):
    username = request.POST.get('user2')
    password = request.POST.get('psw2')
    passwordConf = request.POST.get('psw3')

    if password == passwordConf:
        user = User.objects.create(
            username=username,
            password=password
        )
        user.save()
    else:
        return HttpResponse('ssss')
    return render(request, 'login.html')


def loginhtml(request):
    return render(request, 'login.html')


def registhtml(request):
    return render(request, 'register.html')
