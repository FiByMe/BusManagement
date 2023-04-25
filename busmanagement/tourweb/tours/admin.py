from django.contrib import admin
from django.utils.safestring import mark_safe

from .models import Bus, BusCompany, Delivery, Trip, Route, Ticket


# Register your models here.
class BusAdmin(admin.ModelAdmin):
    class Media:
        css = {
            'all': '/static/css/main.css'
        }

    list_display = ["id", "bus_number", "driver_name", "driver_phone", "company"]
    search_fields = ["id", "bus_number", "company"]
    list_filter = ["company", "driver_name"]


class BusCompanyAdmin(admin.ModelAdmin):
    list_display = ["id", "name", "active"]
    readonly_fields = ["image"]

    def image(self, BusCompany):
        return mark_safe(
            "<img src='/static/{avatar_url}' width = 120px alt = {alt} />".format(avatar_url=BusCompany.avatar,
                                                                                  alt=BusCompany.name))


class TripAdmin(admin.ModelAdmin):
    list_display = ["id", "route", "departure_time", "arrival_time", "price", "available_seats", "bus"]


class RouteAdmin(admin.ModelAdmin):
    list_display = ["name", "departure_city", "arrival_city", "bus_company"]


class TicketAdmin(admin.ModelAdmin):
    list_display = ["id", "trip", "passenger_name", "passenger_phone", "passenger_email",
                    "payment_method", "is_confirmed"
                    ]


class DeliveryAdmin(admin.ModelAdmin):
    list_display = ["id", "sender_name", "sender_phone", "sender_email", "receiver_name", "receiver_phone",
                    "receiver_email", "sent_time", "received_time", "is_notified", "bus_company"
                    ]


admin.site.register(Bus, BusAdmin)
admin.site.register(BusCompany, BusCompanyAdmin)
admin.site.register(Trip, TripAdmin)
admin.site.register(Route, RouteAdmin)
admin.site.register(Ticket, TicketAdmin)
admin.site.register(Delivery, DeliveryAdmin)
