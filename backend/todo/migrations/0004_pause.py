# Generated by Django 4.1.4 on 2023-02-11 15:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('todo', '0003_alter_todo_work_cycle_frontend'),
    ]

    operations = [
        migrations.CreateModel(
            name='Pause',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('task_id', models.IntegerField()),
                ('pause_count', models.IntegerField(default=0)),
            ],
        ),
    ]
