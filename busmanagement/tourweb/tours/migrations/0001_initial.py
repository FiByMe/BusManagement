# Generated by Django 4.2 on 2023-04-25 08:50

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Bus',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('bus_number', models.CharField(max_length=255)),
                ('driver_name', models.CharField(max_length=255)),
                ('driver_phone', models.CharField(max_length=20)),
            ],
        ),
        migrations.CreateModel(
            name='BusCompany',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('avatar', models.ImageField(blank=True, null=True, upload_to='avatars/')),
                ('is_verified', models.BooleanField(default=False)),
                ('is_accepting_delivery', models.BooleanField(default=False)),
            ],
        ),
        migrations.CreateModel(
            name='Route',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('departure_city', models.CharField(max_length=255)),
                ('arrival_city', models.CharField(max_length=255)),
                ('bus_company', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='routes', to='tours.buscompany')),
            ],
        ),
        migrations.CreateModel(
            name='Trip',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('departure_time', models.DateTimeField()),
                ('arrival_time', models.DateTimeField()),
                ('price', models.DecimalField(decimal_places=2, max_digits=10)),
                ('available_seats', models.PositiveIntegerField()),
                ('bus', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='trips', to='tours.bus')),
                ('route', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='trips', to='tours.route')),
            ],
        ),
        migrations.CreateModel(
            name='Ticket',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('passenger_name', models.CharField(max_length=255)),
                ('passenger_phone', models.CharField(max_length=20)),
                ('passenger_email', models.EmailField(max_length=254)),
                ('payment_method', models.CharField(choices=[('online', 'Online'), ('cash', 'Cash')], max_length=20)),
                ('is_confirmed', models.BooleanField(default=False)),
                ('trip', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='tickets', to='tours.trip')),
            ],
        ),
        migrations.CreateModel(
            name='Review',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('rating', models.PositiveIntegerField()),
                ('comment', models.TextField()),
                ('bus_company', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='reviews', to='tours.buscompany')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='reviews', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Delivery',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('sender_name', models.CharField(max_length=255)),
                ('sender_phone', models.CharField(max_length=20)),
                ('sender_email', models.EmailField(max_length=254)),
                ('receiver_name', models.CharField(max_length=255)),
                ('receiver_phone', models.CharField(max_length=20)),
                ('receiver_email', models.EmailField(max_length=254)),
                ('sent_time', models.DateTimeField()),
                ('received_time', models.DateTimeField(blank=True, null=True)),
                ('is_notified', models.BooleanField(default=False)),
                ('bus_company', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='deliveries', to='tours.buscompany')),
            ],
        ),
        migrations.AddField(
            model_name='bus',
            name='bus_company',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='buses', to='tours.buscompany'),
        ),
        migrations.CreateModel(
            name='Admin',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='admin', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
