from rest_framework.decorators import api_view
from rest_framework.response import Response
from .yt_api.video import get_comments
from .models import Comment, PDF, Video
from .serializers import CommentSerializer, PDFSerializer, VideoSerializer


@api_view(["GET"])
def website_stats(req):
    comments = Comment.objects.all().order_by("-id").first()
    videos = Video.objects.all().order_by("-id").first()
    pdfs = PDF.objects.all().order_by("-id").first()

    com_serializer = CommentSerializer(comments, many=False).data
    vid_serializer = VideoSerializer(videos, many=False).data
    pdf_serializer = PDFSerializer(pdfs, many=False).data

    return Response({
        "comments": com_serializer,
        "videos": vid_serializer,
        "pdfs": pdf_serializer
    })


@api_view(["GET"])
def comments(req, video_id):
    try:
        comments, video_info = get_comments(video_id)
    except:
        return Response(status=499)
    else:
        last_comment = Comment.objects.all().order_by("-id").first()
        new_comment = Comment(number=len(comments) + last_comment.number)
        new_comment.save()

        last_video = Video.objects.all().order_by("-id").first()
        new_video = Video(number=last_video.number + 1)
        new_video.save()

        return Response({"comments": comments, "video_info": video_info})


@api_view(["GET"])
def pdf(req):
    last_pdf = PDF.objects.all().order_by("-id").first()
    new_pdf = PDF(number=last_pdf.number + 1)
    new_pdf.save()
    return Response(status=200)
