# Generated by Django 4.2.1 on 2023-08-25 11:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("notes", "0001_initial"),
    ]

    operations = [
        migrations.AlterField(
            model_name="todonote",
            name="description",
            field=models.TextField(max_length=1000),
        ),
    ]