# Generated by Django 4.1.4 on 2023-02-11 03:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('todo', '0002_alter_todo_pause'),
    ]

    operations = [
        migrations.AlterField(
            model_name='todo',
            name='work_cycle_frontend',
            field=models.IntegerField(default=0),
        ),
    ]