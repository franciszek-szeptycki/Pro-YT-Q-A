import requests
from .config import URL, URL_REGULAR_CONFIG, API_KEY
import json

from .utils import sort_by_likes


def get_comments(video_id):
    page_token = ""
    comments_list = []

    while page_token or not comments_list:
        ready_url = f"{URL}/commentThreads{URL_REGULAR_CONFIG}&part=snippet&videoId={video_id}&pageToken={page_token}&order=relevance"
        print(ready_url)

        proto_res = requests.get(ready_url)
        res = json.loads(proto_res.text)

        items = res["items"]

        if (items):
            for item in items:
                item_info = item["snippet"]["topLevelComment"]["snippet"]
                comments_list.append({
                    "id": item["id"],
                    "user_name": item_info["authorDisplayName"],
                    "profile_url": item_info["authorProfileImageUrl"],
                    "text": item_info["textOriginal"],
                    "like_count": item_info["likeCount"],
                    "published_at": item_info["publishedAt"]
                })
        else:
            break

        try:
            page_token = res["nextPageToken"]
        except:
            break

    video_res = requests.get(f"{URL}/videos?key={API_KEY}&id={video_id}&part=snippet")
    video_data = json.loads(video_res.text)["items"][0]["snippet"]

    video_info = {
        "publishedAt": video_data["publishedAt"],
        "title": video_data["title"],
        "description": video_data["description"],
        "thumbnail": video_data["thumbnails"]["high"],
        "channelTitle": video_data["channelTitle"],
    }

    return sort_by_likes(comments_list), video_info
