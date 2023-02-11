from rest_framework import serializers
from .models import Sites


# class SiteSerializer(serializers.ModelSerializer):
#     """
#     Serialize model data into JSON and vice versa
#     """
#     class Meta:
#         model = Site
#         fields = ("id", "siteName")

from rest_framework import serializers
from .models import Sites


class SiteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sites
        fields = ['entertainment', 'social', 'news', 'sports']
