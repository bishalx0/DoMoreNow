# Generated by Django 4.1.4 on 2023-02-11 03:21

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Todo',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('todoTitle', models.CharField(max_length=200)),
                ('hrs', models.IntegerField()),
                ('mins', models.IntegerField()),
                ('work_time', models.IntegerField(null=True)),
                ('break_time', models.IntegerField(null=True)),
                ('work_cycle_frontend', models.IntegerField(default=0, null=True)),
                ('work_cycle_backend', models.IntegerField(null=True)),
                ('pause', models.JSONField()),
                ('completed', models.BooleanField(default=False)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
            ],
        ),
    ]
