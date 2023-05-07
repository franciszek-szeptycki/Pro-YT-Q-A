import {CommentType} from "../components/Comment";

export const sortByLikes = (someList: CommentType[]): CommentType[] => {
    // @ts-ignore
    const newList: CommentType[] = [someList.pop()]

    someList.map(item => {
        let i = 0
        while (true) {
            if (i >= newList.length) newList.push(item)
            // @ts-ignore
            else if (item.like_count >= newList[i].like_count) {
                newList.splice(i, 0, item);
            } else {
                i += 1
                continue
            }
            break
        }
    })
    return newList
}