from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse, JsonResponse
from rest_framework.decorators import action

from .serializers import BusCompanySerializer, UserSerializer
from rest_framework import viewsets, generics, parsers, permissions, status
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateAPIView
from .models import BusCompany
from django.contrib.auth.models import User


# Create your views here.
# def index(request):
#     return HttpResponse("Hello World")

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class ListBusCompany(ListCreateAPIView):
    model = BusCompany
    serializer_class = BusCompanySerializer

    def get_queryset(self):
        return BusCompany.objects.all()

    @action(methods=['post'], detail=True, url_path='companies')
    def create(self, request, *args, **kwargs):
        serializer = BusCompanySerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()

            return JsonResponse({
                'message': 'Create a new Company successful!'
            }, status=status.HTTP_201_CREATED)

        return JsonResponse({
            'message': 'Create a new Company unsuccessful!'
        }, status=status.HTTP_400_BAD_REQUEST)
