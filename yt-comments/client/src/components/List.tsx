import {ChangeEvent, useContext, useEffect, useState} from "react";
import axios from 'axios'
import Comment, {CommentType} from "./Comment";
import {AppContext} from "../context";

export default () => {

    const {state, dispatch} = useContext(AppContext)

    const [pdfBtnPosition, setPdfBtnPosition] = useState<"absolute" | "fixed">('absolute')

    useEffect(() => {
        const app = document.querySelector('.app')
        // @ts-ignore
        app.removeEventListener("scroll", null)
        // @ts-ignore
        app.onscroll = () => {
            // @ts-ignore
            const newPosition = app.clientHeight > app.scrollTop ? "absolute" : "fixed"
            if (newPosition !== pdfBtnPosition) setPdfBtnPosition(newPosition)
        }
    }, [pdfBtnPosition])


    return state.MAIN_COMMENTS.length > 0 ? (
                <div className="list" >
                    {state.VIDEO_INFO && <div className="video-info">
                        <div className="video-info__thumbnail" >
                            <img src={state.VIDEO_INFO.thumbnail.url} alt="youtube video thumbnail"/>
                        </div>
                        <h1 className="video-info__title" >{state.VIDEO_INFO.title}</h1>
                        <p className="video-info__chanel" >{state.VIDEO_INFO.channelTitle}</p>
                        <p className="video-info__date" >{state.VIDEO_INFO.publishedAt.substring(0, 10)}</p>
                    </div>}
                    <div className={`pdf-btn ${pdfBtnPosition} ${state.PDF_VIEW ? "fixed" : ""}`} onClick={() =>
                        dispatch({type: state.PDF_VIEW ? "PDF_VIEW_OFF" : "PDF_VIEW_ON"})}>
                        <i className="fa-solid fa-file"></i>
                    </div>

                    {state.MAIN_COMMENTS.length > 0 &&
                        <p className="comments-quantity" >comments: {state.MAIN_COMMENTS.length}</p>}

                    <ul className="list-ul" >
                        {state.MAIN_COMMENTS.map(item => <Comment key={item.id} data={item} />)}
                    </ul>
                </div>
    ) : <></>
}


export type VideoInfoType = {
    publishedAt: string
    title: string
    description: string
    thumbnail: {
        url: string
        width: string
        height: string
    }
    channelTitle: string
}