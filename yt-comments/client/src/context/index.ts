import {createContext, Dispatch} from "react";
import {ActionType, StateType} from "./reducer";


export const initialState: StateType = {
    MAIN_COMMENTS: [],
    PDF_COMMENTS: [],
    LOADING: false,
    PDF_VIEW: false,
    VIDEO_INFO: null,
    STATS: {
        "comments": {
            number: 0
        },
        "videos": {
            number: 0
        },
        "pdfs": {
            number: 0
        },
    }
}

export const AppContext = createContext<{state: StateType, dispatch: Dispatch<ActionType>}>(
    {state: initialState, dispatch: () => initialState})