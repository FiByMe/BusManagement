from django.contrib import admin
from django.urls import path, include
from . import views
from rest_framework import routers
<<<<<<< HEAD
from .views import CompaniesView, UserViewSet, TripView, RouteView, TicketView, BusView
=======
from .views import ListBusCompany, UserViewSet, ListTripOfCompany
>>>>>>> 59a4760b777d46a38c33e93d67cf872e835cb692

router = routers.DefaultRouter()
router.register('users', UserViewSet)
router.register('trips', TripView)
router.register('routes', RouteView)
router.register('buses', BusView)
router.register('tickets', TicketView)
router.register('companies', CompaniesView)

urlpatterns = [
<<<<<<< HEAD
=======
    path('companies', views.ListBusCompany.as_view()),
    path('trips', views.ListTripOfCompany.as_view()),
>>>>>>> 59a4760b777d46a38c33e93d67cf872e835cb692
    path('', include(router.urls))
]