import {CommentType} from "./Comment";
import {ChangeEvent, useContext, useEffect, useState} from "react";
import {AppContext} from "../context";
import axios from 'axios';
import './style/SearchEngine.sass'
import {scrollToComments} from "../utils/scrolling";
import {VideoInfoType} from "./List";
import {useQuery} from 'react-query'


export default () => {

    const {state, dispatch} = useContext(AppContext)

    const [link, setLink] = useState("")


    const handleSubmit = (e: any) => {
        e.preventDefault()

        let url: any = ""
        try {
            url = new URL(link) || ""
        } catch {
            setLink("")
            return dispatch({type: "LOADING_OFF"})
        }

        dispatch({type: "LOADING_ON"})

        const id = new URLSearchParams(url.search).get("v");
        axios.get(`/api/video/${id}/comments`).
        then((res: { data: { comments: CommentType[], video_info: VideoInfoType }}) => {
            dispatch({type: "SET_MAIN", item: res.data.comments})
            dispatch({type: "LOADING_OFF"})
            dispatch({type: "SET_VIDEO_INFO", item: res.data.video_info})
            setTimeout(() => scrollToComments(), 100)
        }).catch(() => {
            dispatch({type: "LOADING_OFF"})
            setLink("")
        })
    }


    return (
        <>
            <div className="stats">
                <i className="fa-solid fa-list"></i> <p>{state.STATS.comments.number}</p>
                <i className="fa-solid fa-circle-play"></i> <p>{state.STATS.videos.number}</p>
                <i className="fa-solid fa-file-pdf"></i> <p>{state.STATS.pdfs.number}</p>
            </div>
            <div className="search" >
                <form className="search__form" onSubmit={handleSubmit}>
                    <input className="search__form-input" placeholder="Enter a link to a YouTube video here..." value={link} onChange={(e: ChangeEvent<HTMLInputElement>) => setLink(e.target.value)} />
                    <div className="search__form-clear"><i onClick={() => setLink("")} className="fa-solid fa-xmark"></i></div>
                    <div className="search__form-submit-wrapper" >
                        <button className={`search__form-submit ${state.LOADING ? "loading" : ""}`} >
                            {state.LOADING ? <i className="fa-solid fa-spinner"></i> : <i className="fa-solid fa-magnifying-glass"></i>}
                        </button></div>
                </form>
            </div>
        </>
    )
}


export type StatsType = {
    "comments": {
        number: number
    },
    "videos": {
        number: number
    },
    "pdfs": {
        number: number
    },
}
