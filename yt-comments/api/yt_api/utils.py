def sort_by_likes(some_list):
    new_list = [some_list.pop()]

    for item in some_list:
        i = 0
        while True:
            if i >= len(new_list):
                new_list.append(item)
            elif item["like_count"] >= new_list[i]["like_count"]:
                new_list.insert(i, item)
            else:
                i += 1
                continue
            break

    return new_list
