# Generated by Django 4.1.4 on 2023-02-11 03:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('todo', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='todo',
            name='pause',
            field=models.JSONField(null=True),
        ),
    ]
