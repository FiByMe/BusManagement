# Generated by Django 4.2 on 2023-04-25 10:37

import ckeditor.fields
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('tours', '0004_rename_bus_company_bus_company'),
    ]

    operations = [
        migrations.AddField(
            model_name='delivery',
            name='note',
            field=ckeditor.fields.RichTextField(default='null'),
        ),
    ]
