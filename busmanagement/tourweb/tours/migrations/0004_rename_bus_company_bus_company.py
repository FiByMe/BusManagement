# Generated by Django 4.2 on 2023-04-25 09:40

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('tours', '0003_alter_buscompany_avatar'),
    ]

    operations = [
        migrations.RenameField(
            model_name='bus',
            old_name='bus_company',
            new_name='company',
        ),
    ]
