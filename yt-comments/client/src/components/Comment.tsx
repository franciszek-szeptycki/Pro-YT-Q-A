import './style/List.sass'
import {useContext, useState} from "react";
import {AppContext} from "../context";
import "./style/Comment.sass"


export default ({data, pdf = false, pdfView=false}: {data: CommentType, pdf?: boolean, pdfView?:boolean} ) => {
    const {id, like_count, text, profile_url, published_at, user_name} = data

    const {state, dispatch} = useContext(AppContext)

    const selected = state.PDF_COMMENTS.includes(data)

    const handleClick = () => dispatch({type: selected ? "REMOVE_FROM_PDF" : "ADD_TO_PDF", item: data})

    return (
        <li className={`comment ${(selected && !pdf) ? "selected" : ""}`} onClick={handleClick} >

            <div className="comment__top">
                <img className="comment__top-img" src={profile_url}/>
                <p className="comment__top-name" >{user_name}{` ( ${like_count} )`}</p>
            </div>
            <p className="comment__text">{text}</p>
        </li>
    )
}

export type CommentType = {
    id: number
    user_name: string
    profile_url: string
    text: string
    like_count: string
    published_at: string
}