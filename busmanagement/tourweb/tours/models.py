from django.db import models
from django.contrib.auth.models import User, AbstractUser
from ckeditor.fields import RichTextField


# class User(AbstractUser):
#     avatar = models.ImageField(upload_to='users/%Y/%m', null=True)
#     phone = models.CharField(unique=True, null=True, max_length=11)
#     role = models.CharField(max_length=45, default=None, null=True)
#
#     def __str__(self):
#         return self.username


class BaseModel(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True


class BusCompany(models.Model):
    name = models.CharField(max_length=255)
    avatar = models.ImageField(upload_to='avatars/company/', null=True, blank=True)
    is_verified = models.BooleanField(default=False)
    is_accepting_delivery = models.BooleanField(default=False)
    active = models.BooleanField(default=True)
    models.ForeignKey(User, on_delete=models.CASCADE, related_name='buscompanies')

    def __str__(self):
        return self.name


class Bus(models.Model):
    company = models.ForeignKey(BusCompany, on_delete=models.CASCADE, related_name='buses')
    bus_number = models.CharField(max_length=255)
    driver_name = models.CharField(max_length=255)
    driver_phone = models.CharField(max_length=20)

    def __str__(self):
        return self.bus_number


class Route(models.Model):
    name = models.CharField(max_length=255)
    departure_city = models.CharField(max_length=255)
    arrival_city = models.CharField(max_length=255)
    bus_company = models.ForeignKey(BusCompany, on_delete=models.CASCADE, related_name='routes')

    def __str__(self):
        return self.name


class Trip(models.Model):
    departure_time = models.DateTimeField()
    arrival_time = models.DateTimeField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    available_seats = models.PositiveIntegerField()
    route = models.ForeignKey(Route, on_delete=models.CASCADE, related_name='trips')
    bus = models.ForeignKey(Bus, on_delete=models.CASCADE, related_name='trips')

    def __str__(self):
        return f"{self.route.name} - {self.departure_time.strftime('%d-%m-%Y %H:%M')}"


class Ticket(models.Model):
    payment_method_choices = (
        ('online', 'Online'),
        ('cash', 'Cash')
    )
    trip = models.ForeignKey(Trip, on_delete=models.CASCADE, related_name='tickets')
    passenger_name = models.CharField(max_length=255)
    passenger_phone = models.CharField(max_length=20)
    passenger_email = models.EmailField()
    payment_method = models.CharField(choices=payment_method_choices, max_length=20)
    is_confirmed = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.passenger_name} - {self.trip}"


class Delivery(models.Model):
    sender_name = models.CharField(max_length=255)
    sender_phone = models.CharField(max_length=20)
    sender_email = models.EmailField()
    receiver_name = models.CharField(max_length=255)
    receiver_phone = models.CharField(max_length=20)
    receiver_email = models.EmailField()
    note = RichTextField(default='')
    sent_time = models.DateTimeField()
    received_time = models.DateTimeField(null=True, blank=True)
    is_notified = models.BooleanField(default=False)
    bus_company = models.ForeignKey(BusCompany, on_delete=models.CASCADE, related_name='deliveries')

    def __str__(self):
        return f"{self.sender_name} - {self.receiver_name}"


class Review(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='reviews')
    bus_company = models.ForeignKey(BusCompany, on_delete=models.CASCADE, related_name='reviews')
    rating = models.PositiveIntegerField()
    comment = models.TextField()

    def __str__(self):
        return f"{self.user.username} - {self.bus_company.name}"


class Admin(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='admin')

    def __str__(self):
        return self.user.username
