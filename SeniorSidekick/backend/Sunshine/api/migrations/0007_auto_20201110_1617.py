# Generated by Django 2.2.7 on 2020-11-10 10:47

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0006_auto_20201110_1616'),
    ]

    operations = [
        migrations.AlterField(
            model_name='volunteer',
            name='services_available',
            field=models.ForeignKey(blank=True, on_delete=django.db.models.deletion.CASCADE, to='api.Service'),
        ),
    ]
