from django.contrib import admin
from .models import Comment, PDF, Video


admin.site.register([Comment, PDF, Video])
