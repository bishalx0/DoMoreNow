# Generated by Django 4.1.4 on 2023-02-12 00:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('todo', '0004_pause'),
    ]

    operations = [
        migrations.CreateModel(
            name='Subject',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('credit', models.IntegerField()),
            ],
        ),
    ]