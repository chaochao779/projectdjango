#!/usr/bin/env python
# encoding: utf-8

from celery import Celery
from time import sleep

# broker="redis://redis:6379/1" 列队数据库存放点
# backend="redis://redis:6379/2" 任务执行完成后数据库存放点
# // 创建一个celery
# application
# 用来定义你的任务列表
app = Celery("tasks", broker="redis://127.0.0.1:6379/1",
             backend="redis://127.0.0.1:6379/2")


@app.task
def add(x, y):
    return x + y


@app.task
def mult(x, y):
    sleep(10)
    return x * y


@app.task
def getname(name):
    return name


@app.task
def sendmail(user_email):
    # func(user_email)
    # return True
    pass