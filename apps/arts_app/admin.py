#from django.contrib import admin
from .models import Tag, Art
#from apps.login.models import User
import xadmin
# Register your models here.

from xadmin import views

class BaseSetting(object):
    # 主题修改
    enable_themes = True
    use_bootswatch = True

class GlobalSettings(object):
    #整体配置
    site_title = '化妆品管理系统'
    site_footer = '梁超毕业python项目-zhougy'
    menu_style = 'accordion'    #菜单折叠


class TagAdmin(BaseSetting):
   #后台列表显示列
   list_display = ['t_name', 't_info', 't_createtime']
   # 后台列表查询条件
   search_fields = ['t_name', 't_createtime']
   # 后台列表通过时间查询
   list_filter = ['t_name', 't_info', 't_createtime']
   list_per_page = 10
# class UserAdmin(object):
#     list_display =['username']
#     search_fields = ['username']
#     list_filter = ['username']
#     list_per_page = 10
class ArtAdmin(object):
   # 后台列表显示列
   list_display = ['a_title', 'a_info', 'a_content', 'a_img', 'a_createtime', 'a_updatetime']
   # 后台列表查询条件
   search_fields = ['a_title', 'a_info', 'a_content']
   # 后台列表通过时间查询
   list_filter = ['a_title', 'a_info', 'a_content', 'a_createtime']
   list_per_page = 10
   #list_eitable=['a_title', 'a_info', 'a_content', 'a_createtime']

   style_fields = {'a_content': 'ueditor'}


xadmin.site.register(views.CommAdminView, GlobalSettings)
xadmin.site.register(views.BaseAdminView, BaseSetting)
xadmin.site.register(Tag, TagAdmin)
xadmin.site.register(Art, ArtAdmin)
# xadmin.site.register(User, UserAdmin)
