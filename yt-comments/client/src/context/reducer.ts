import {CommentType} from "../components/Comment";
import {sortByLikes} from "../utils/sortByLikes";
import {VideoInfoType} from "../components/List";
import {StatsType} from "../components/SearchEngine";

export const reducer = (state: StateType, action: ActionType): StateType => {
    switch (action.type) {
        case "SET_MAIN":
            return {...state, MAIN_COMMENTS: action.item}
        case "REMOVE_ALL":
            return {...state, MAIN_COMMENTS: [], PDF_COMMENTS: []}

        case "ADD_TO_PDF":
            const sortedPDFComments = sortByLikes([...state.PDF_COMMENTS, action.item])
            return {...state, PDF_COMMENTS: sortedPDFComments}
        case "REMOVE_FROM_PDF":
            const newPDFComments = state.PDF_COMMENTS.filter(elem => elem !== action.item && elem)
            return {...state, PDF_COMMENTS: newPDFComments}

        case "LOADING_OFF":
            return {...state, LOADING: false}
        case "LOADING_ON":
            return {...state, LOADING: true}

        case "PDF_VIEW_ON":
            return {...state, PDF_VIEW: true}
        case "PDF_VIEW_OFF":
            return {...state, PDF_VIEW: false}

        case "SET_VIDEO_INFO":
            return {...state, VIDEO_INFO: action.item}

        case "SET_STATS":
            return {...state, STATS: action.item}
    }
}

export type StateType = {
    MAIN_COMMENTS: CommentType[]
    PDF_COMMENTS: CommentType[]
    LOADING: boolean
    PDF_VIEW: boolean
    VIDEO_INFO: VideoInfoType | null
    STATS: StatsType
}

export type ActionType =
    {type: "SET_MAIN", item: CommentType[]} |
    {type: "REMOVE_ALL", item: CommentType[]} |
    {type: "ADD_TO_PDF", item: CommentType} |
    {type: "REMOVE_FROM_PDF", item: CommentType} |
    {type: "LOADING_OFF"} |
    {type: "LOADING_ON"} |
    {type: "PDF_VIEW_ON"} |
    {type: "PDF_VIEW_OFF"} |
    {type: "SET_VIDEO_INFO", item: VideoInfoType} |
    {type: "SET_STATS", item: StatsType}


