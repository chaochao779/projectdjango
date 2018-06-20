#!/usr/bin/env python  
# encoding: utf-8  

from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render
from .models import Art, Tag
from SHDjangoLesson.settings import logger

'''
接口URL：  /art/index?page=1&t=1
方法：GET
      输入参数说明：
          page:   第几页
          t:  标签类别，整数标识  eg: 0--全部   1--爱情小说  2—科幻小说
      输出：
            渲染首页卡片式页面
'''


def IndexHandler(request):
    # print(request)
    import redis
    r =redis.Redis()
    res =r.get("visit:all")
    if res == None:
        r.set("visit:all",0)
    r.incr("visit:all")
    time_visit = r.get("visit:all")
    url = request.path

    page = int(request.GET.get('page', 1))
    t = int(request.GET.get('t', 0))

    # (1) 计算查询的记录数
    total = 0
    if t == 0:
        art_set = Art.objects.all()  # queryset
        total = art_set.count()
    else:
        tag_id = int("{0}".format(t))
        art_set = Art.objects.filter(a_tag_id=tag_id)
        total = art_set.count()
    logger.info("IndexHandler request Handler begin")
    logger.debug('query total:' + str(total))

    tags = Tag.objects.all()
    context = dict(
        pagenum=1,
        total=0,
        prev=1,
        next=1,
        pagerange=range(1, 2),
        data=[],
        url=request.path,
        tags=tags,
        page=1,
        t=0,
        time_visit= 0
        #time_visit = re.get("visit:totals",0)
    )
    shownum = 4
    if total > 0:
        import math
        pagenum = math.ceil(total / shownum)
        if page < 1:
            url = request.path + "?page=1&t=0"
            return HttpResponseRedirect(url)
        if page > pagenum:
            url = request.path + "?page=%s&t=%s" % (pagenum, t)
            return HttpResponseRedirect(url)
        offset = (page - 1) * shownum
        if t == 0:
            data = Art.objects.all()[offset:shownum + offset]
        else:
            data = Art.objects.filter(a_tag_id=t)[offset:shownum + offset]

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
            tags=tags,
            page=page,
            t=t,
            time_visit = time_visit
        )

    return render(request, "home/index.html", context=context)
