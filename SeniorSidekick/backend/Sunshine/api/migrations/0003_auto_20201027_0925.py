# Generated by Django 3.1.2 on 2020-10-27 03:55

import django.contrib.postgres.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_address_experience_volunteer'),
    ]

    operations = [
        migrations.AlterField(
            model_name='volunteer',
            name='experience',
            field=django.contrib.postgres.fields.ArrayField(base_field=models.IntegerField(), size=None),
        ),
    ]
