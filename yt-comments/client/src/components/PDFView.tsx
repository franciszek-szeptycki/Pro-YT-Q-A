import './style/PDFView.sass'
import {AppContext} from "../context";
import {useContext, useEffect, useRef} from "react";
import Comment from "./Comment";
import jsPdf from "jspdf"
import axios from 'axios';
import {StatsType} from "./SearchEngine";
import { useQuery } from 'react-query';


export default () => {

    const {state, dispatch} = useContext(AppContext)

    const {refetch} = useQuery('stats', () => axios.get('/api/stats/'), {
        onSuccess: ({data}: {data: StatsType}) => dispatch({type: "SET_STATS", item: data})
    })

    useEffect(() => {
        refetch()
    }, [state.LOADING])

    const saveAsPDF = async () => {
        axios({
            url: 'http://0.0.0.0:3000/pdf/',
//             url: 'http://13.41.159.203/:3000/pdf/',
//             13.41.159.203
            method: 'POST',
            responseType: 'blob',
            data: {
                "data": state.PDF_COMMENTS
            }
        }).then(async (response) => {
                const pdfBlob = new Blob([response.data], {type: 'application/pdf'});
                const url = window.URL.createObjectURL(pdfBlob);
                const link = document.createElement('a');
                link.href = url;
                link.download = 'YouTube-Comments.pdf';
                document.body.appendChild(link);
                link.click();
                await fetch("/api/pdf/")
                refetch()
            }).catch((error) => {
                console.log(error);
            });
    }

    return (
        <div className={`pdf-view ${state.PDF_VIEW ? "" : "hidden"} `} >
            <button className="pdf-view__btn" onClick={saveAsPDF}>
                <i className="fa-solid fa-file-pdf"></i></button>
            <div className="pdf-view__page" >
                <ul className="pdf-view__page-ul">
                    {state.PDF_COMMENTS.map(item => (
                        <li>
                            <p style={{fontSize: "20px", lineHeight: "1.3" }}>{`( ${item.like_count} ) `}{item.user_name}</p>
                            <p style={{fontSize: "15px", lineHeight: "1.3" }}>{item.text}</p>
                            <br/>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}