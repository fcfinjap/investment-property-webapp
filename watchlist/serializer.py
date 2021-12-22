from rest_framework import serializers
from . models import *

class CategorySerializer(serializers.RelatedField):
    def to_representation(self, value):
        return value.name
    
    class Meta:
        model = Category

class PropertySerializer(serializers.ModelSerializer):
    categories = CategorySerializer(read_only=True, many=True)

    class Meta:
        model = Property
        fields = '__all__'