# Generated by Django 3.1.3 on 2020-11-10 20:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0011_auto_20201111_0223'),
    ]

    operations = [
        migrations.AlterField(
            model_name='volunteer',
            name='biography',
            field=models.TextField(null=True),
        ),
        migrations.AlterField(
            model_name='volunteer',
            name='volunteer_name',
            field=models.CharField(max_length=50, null=True),
        ),
    ]