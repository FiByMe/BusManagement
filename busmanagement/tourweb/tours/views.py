from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse, JsonResponse
from rest_framework.decorators import action
from rest_framework.response import Response
from django.db import transaction
from rest_framework import status

from rest_framework import filters
from .serializers import BusCompanySerializer, UserSerializer, TripSerializer, RouteSerializer, BusSerializer, \
    TicketSerializer, UserCreateSerializer
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



class RegisterView(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserCreateSerializer

    @action(methods=['POST'], detail=False)
    def register(self, request):
        serializer = UserCreateSerializer(data=request.data)
        if serializer.is_valid():
            username = serializer.validated_data['username']
            password = serializer.validated_data['password']
            email = serializer.validated_data.get('email', '')
            User.objects.create_user(username=username, email=email, password=password)
            return Response({'status': 'User created successfully.'}, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


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

    def filter_queryset(self, queryset):
        kw = self.request.query_params.get('kw')
        if self.action.__eq__('list') and kw:
            queryset = queryset.filter(name__icontains=kw)

        # cate_id = self.request.query_params.get('category_id')
        # if cate_id:
        #     queryset = queryset.filter(category_id=cate_id)

        return queryset


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


class ListTripOfCompany(ListCreateAPIView):
    model = Trip
    serializer_class = TripSerializer

    def get_queryset(self):
        return Trip.objects.all()
