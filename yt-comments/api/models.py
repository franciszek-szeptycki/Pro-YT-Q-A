from django.db import models
from django.utils import timezone


class Comment(models.Model):

    def __str__(self):
        return f"{self.number}"

    number = models.IntegerField(default=0, blank=False)
    date = models.DateField(default=timezone.now)


class Video(models.Model):

    def __str__(self):
        return f"{self.number}"

    number = models.IntegerField(default=0, blank=False)
    date = models.DateField(default=timezone.now)


class PDF(models.Model):

    def __str__(self):
        return f"{self.number}"

    number = models.IntegerField(default=0, blank=False)
    date = models.DateField(default=timezone.now)
