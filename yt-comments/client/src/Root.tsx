import { AppContext, initialState } from "./context";
import { reducer } from "./context/reducer";
import { useReducer } from "react";
import { QueryClientProvider, QueryClient } from "react-query";

const client = new QueryClient();

export default ({ children, contextState = initialState }: any) => {
    const [state, dispatch] = useReducer(reducer, contextState);

    return (
        <AppContext.Provider value={{ state, dispatch }}>
            <QueryClientProvider client={client}>
                {children}
            </QueryClientProvider>
        </AppContext.Provider>
    );
};
