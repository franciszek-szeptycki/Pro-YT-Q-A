# Generated by Django 4.1.5 on 2023-01-23 18:50

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0005_comment_pdf_video_delete_stat'),
    ]

    operations = [
        migrations.AlterField(
            model_name='comment',
            name='date',
            field=models.DateField(default=datetime.datetime(2023, 1, 23, 18, 50, 15, 421850, tzinfo=datetime.timezone.utc)),
        ),
        migrations.AlterField(
            model_name='pdf',
            name='date',
            field=models.DateField(default=datetime.datetime(2023, 1, 23, 18, 50, 15, 422581, tzinfo=datetime.timezone.utc)),
        ),
        migrations.AlterField(
            model_name='video',
            name='date',
            field=models.DateField(default=datetime.datetime(2023, 1, 23, 18, 50, 15, 422347, tzinfo=datetime.timezone.utc)),
        ),
    ]
