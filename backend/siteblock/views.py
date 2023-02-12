from rest_framework import viewsets
from .serializers import SiteSerializer
from rest_framework import generics
from .models import Sites
from rest_framework.response import Response
import math

# Create your views here.


# class SiteList(generics.ListCreateAPIView):
#     """
#     Site API List view
#     """
#     serializer_class = SiteSerializer
#     queryset = Site.objects.all()
#
#
# class SiteDetail(generics.RetrieveUpdateDestroyAPIView):
#     """
#     Site API Details view
#     """
#     queryset = Site.objects.all()
#     serializer_class = SiteSerializer


from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Sites
from .serializers import SiteSerializer


class SiteView(APIView):

    def get(self, request, format=None):
        queryset = Sites.objects.all()
        serializer = SiteSerializer(queryset, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = SiteSerializer(data=request.data)
        if serializer.is_valid():
            # print("serializer", serializer)
            serializer.save()
            return Response({'success': True})
        else:
            return Response({'success': False, 'errors': serializer.errors})

