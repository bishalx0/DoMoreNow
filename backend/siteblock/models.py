from django.db import models

# Create your models here.


# class Site(models.Model):
#     """
#     Sites to block
#     """
#     siteName = models.JSONField()

class Sites(models.Model):
    entertainment = models.TextField()
    social = models.TextField()
    news = models.TextField()
    sports = models.TextField()
