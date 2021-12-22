from django.shortcuts import render
from watchlist.models import Property
from rest_framework.views import APIView
from rest_framework.response import Response
from watchlist.serializer import *

def property_index(request):
    properties = Property.objects.all().order_by('-added_date')
    context = {
        "properties": properties,
    }
    return render(request, "property_index.html", context)

def property_profile(request, pk):
    property = Property.objects.get(pk=pk)
    context = {
        "property": property
    }
    return render(request, "property_profile.html", context)

class PropertyView(APIView):
    serializer_class = PropertySerializer
  
    def get(self, request):
        properties = [ PropertySerializer(property).data for property in Property.objects.all()]
        return Response(properties)
  
    def post(self, request):
        serializer = PropertySerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)