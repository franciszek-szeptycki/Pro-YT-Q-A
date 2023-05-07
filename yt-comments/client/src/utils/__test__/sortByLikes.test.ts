import {expect, it} from "vitest";
import {sortByLikes} from "../sortByLikes";

it("sorting by likes v.1", () => {
    const example = [{like_count: 2}, {like_count: 8}, {like_count: 6}, {like_count: 10}, {like_count: 4}]
    // @ts-ignore
    const result = sortByLikes(example)
    expect(result).toEqual([{like_count: 10}, {like_count: 8}, {like_count: 6}, {like_count: 4}, {like_count: 2}])
})

it("sorting by likes v.2", () => {
    const example = [{like_count: 2}, {like_count: 1}, {like_count: 1}, {like_count: 0}, {like_count: 4}]
    // @ts-ignore
    const result = sortByLikes(example)
    expect(result).toEqual([{like_count: 4}, {like_count: 2}, {like_count: 1}, {like_count: 1}, {like_count: 0}])
})