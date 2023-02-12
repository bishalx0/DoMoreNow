from django.contrib import admin
from .models import Sites

# Register your models here.


class SiteAdmin(admin.ModelAdmin):
    """
    Fields of a site to display in admin
    """
    list_display = ['entertainment', 'social', 'news', 'sports']


admin.site.register(Sites, SiteAdmin)
