import { configureStore } from "@reduxjs/toolkit"
import { getInfoReducer } from "./reducer";

const store = configureStore({
    reducer: {
        information: getInfoReducer
    }
});

export default store;
export const server = process.env.REACT_APP_API_URL;
