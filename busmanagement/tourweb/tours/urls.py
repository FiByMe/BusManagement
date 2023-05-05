from django.contrib import admin
from django.urls import path, include
from . import views
from rest_framework import routers
from .views import ListBusCompany, UserViewSet, ListTripOfCompany

router = routers.DefaultRouter()
router.register('users', UserViewSet)

urlpatterns = [
    path('companies', views.ListBusCompany.as_view()),
    path('trips', views.ListTripOfCompany.as_view()),
    path('', include(router.urls))
]