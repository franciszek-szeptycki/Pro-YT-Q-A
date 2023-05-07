import List from "./components/List";
import './assets/styles/App.sass'
import SearchEngine from "./components/SearchEngine";
import {useContext, useEffect} from "react";
import {AppContext} from "./context";
import PDFView from "./components/PDFView";
import smoke from "./assets/img/smoke.jpeg"

export default () => {

    const {state} = useContext(AppContext)

    return (
        <div className="app">
            <header className="header">
                <img src={smoke} />
                <div className="header-curtain"/>
                <SearchEngine/>
            </header>
            <main className="main">
                <List/>
            </main>
            <PDFView/>
        </div>
    )
}