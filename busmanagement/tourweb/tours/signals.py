from django.db.models.signals import post_save
from django.dispatch import receiver
from .models import Trip, Ticket


@receiver(post_save, sender=Trip, weak=False)
def create_tickets(sender, instance, created, **kwargs):
    if created:
        for i in range(instance.available_seats):
            ticket = Ticket(trip=instance, seat_number=i + 1)
            ticket.save()