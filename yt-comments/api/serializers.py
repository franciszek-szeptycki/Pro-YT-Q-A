from .models import Comment, PDF, Video
from rest_framework import serializers


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = '__all__'

class VideoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Video
        fields = '__all__'

class PDFSerializer(serializers.ModelSerializer):
    class Meta:
        model = PDF
        fields = '__all__'