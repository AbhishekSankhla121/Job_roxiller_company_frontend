import { configureStore } from "@reduxjs/toolkit"
import { getInfoReducer } from "./reducer";

const store = configureStore({
    reducer: {
        information: getInfoReducer
    }
});

export default store;
export const server = "https://job-roxiller-company-backend.onrender.com/api/v1"