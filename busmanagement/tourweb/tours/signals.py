from django.db.models.signals import post_save
from django.dispatch import receiver
from .models import Trip, Ticket


@receiver(post_save, sender=Trip)
def create_tickets(sender, instance, **kwargs):
    for i in range(Trip.seats):
        ticket = Ticket(trip=instance, seat_number=i + 1)
        ticket.save()
