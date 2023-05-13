from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from .views import CompaniesView, UserViewSet, TripView, RouteView, TicketView, BusView, RegisterView

router = routers.DefaultRouter()
router.register('users', UserViewSet)
router.register('trips', TripView)
router.register('routes', RouteView)
router.register('buses', BusView)
router.register('tickets', TicketView)
router.register('companies', CompaniesView)
router.register('', RegisterView)

urlpatterns = [
    path('', include(router.urls))
]