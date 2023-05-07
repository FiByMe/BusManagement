from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse, JsonResponse
from rest_framework.decorators import action
from rest_framework import filters
from .serializers import BusCompanySerializer, UserSerializer, TripSerializer, RouteSerializer, BusSerializer, \
    TicketSerializer
from rest_framework import viewsets, generics, parsers, permissions, status
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateAPIView
from .models import BusCompany, Trip, Ticket, Bus, Route
from django.contrib.auth.models import User


# Create your views here.
# def index(request):
#     return HttpResponse("Hello World")

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class CompaniesView(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = BusCompanySerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['name']

    def get_queryset(self):
        return BusCompany.objects.all()

    # @action(methods=['post'], detail=True, url_path='companies')
    # def create(self, request, *args, **kwargs):
    #     serializer = BusCompanySerializer(data=request.data)
    #
    #     if serializer.is_valid():
    #         serializer.save()
    #
    #         return JsonResponse({
    #             'message': 'Create a new Company successful!'
    #         }, status=status.HTTP_201_CREATED)
    #
    #     return JsonResponse({
    #         'message': 'Create a new Company unsuccessful!'
    #     }, status=status.HTTP_400_BAD_REQUEST)


class TripView(viewsets.ModelViewSet):
    queryset = Trip.objects.all()
    serializer_class = TripSerializer

    # def get_queryset(self):
    #     return Trip.objects.all()


class RouteView(viewsets.ModelViewSet):
    queryset = Route.objects.all()
    serializer_class = RouteSerializer

    def get_queryset(self):
        return Route.objects.all()


class BusView(viewsets.ModelViewSet):
    queryset = Bus.objects.all()
    serializer_class = BusSerializer

    def get_queryset(self):
        return Bus.objects.all()


class TicketView(viewsets.ModelViewSet):
    queryset = Ticket.objects.all()
    serializer_class = TicketSerializer

    def get_queryset(self):
        return Ticket.objects.all()
