from django.db import models
from django.utils import timezone
# Create your models here.

from DjangoUeditor.models import UEditorField
class Student(models.Model):
	'''
	models.IntegerField
	models.CharField
	models.BooleanField
	models.EmailField
	models.DateTimeField
	models.FileField
	models.ImageField
	'''
	st_name = models.CharField(max_length=10, verbose_name='学生姓名')
	st_sex = models.BooleanField(default=1)
	st_age = models.IntegerField(default=0)
	st_address = models.CharField(max_length=10, verbose_name='地址')
	st_email = models.EmailField(verbose_name='邮箱地址')


	class Meta:
		db_table = "student"
		ordering = ["-st_age"]


### 文章标签类
class Tag(models.Model):
	t_name = models.CharField(max_length=20, verbose_name="文章标签名")
	t_info = models.CharField(max_length=50, verbose_name="标签简介")
	t_createtime = models.DateTimeField(default=timezone.now, db_index=True, verbose_name="创建时间")

	def __str__(self):
		return self.t_name

	class Meta:
		verbose_name = "化妆品类别"
		verbose_name_plural = verbose_name
		db_table = "tag"
		ordering = ["-t_createtime"]


### 文章类
class Art(models.Model):
    # a_title = models.CharField(max_length=80, verbose_name="文章标题")
    # a_info = models.CharField(max_length=100, verbose_name="文章描述")
    # a_content = models.TextField(verbose_name="文章内容")
    a_title = models.CharField(max_length=255, verbose_name="化妆品标题")
    a_info = models.CharField(max_length=500, verbose_name="备注")
    # a_content = models.TextField(verbose_name="文章内容")
    a_content = UEditorField(verbose_name="化妆品内容", width=1000, height=600,imagePath="arts_ups/ueditor/", filePath="arts_ups/ueditor/",blank=True, toolbars="full", default='')
    a_img = models.ImageField(null=True, blank=True, upload_to="uploads", verbose_name="封面")
    a_createtime = models.DateTimeField(default=timezone.now, db_index=True, verbose_name="创建时间")
    a_updatetime = models.DateTimeField(default=timezone.now, verbose_name="更新时间")
    a_tag = models.ForeignKey(Tag, verbose_name="关联标签")

    # def __unicode__(self):
    # 	return self.a_title
    def __str__(self):
        return self.a_title

    class Meta:

        verbose_name = "化妆品"
        db_table = "art"
        ordering = ["-a_createtime"]


# class ObjectManager(models.Manager):
# 	pass