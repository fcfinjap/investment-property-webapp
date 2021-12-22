from django.urls import path
from . import views

urlpatterns = [
    path("", views.property_index, name="property_index"),
    path("<int:pk>/", views.property_profile, name="property_profile"),
]