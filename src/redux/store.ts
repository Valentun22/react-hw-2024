import {configureStore} from "@reduxjs/toolkit";
import {counterOneSlice} from "./slices/sliceOne";

export const store = configureStore({
    reducer: {
        slice1: counterOneSlice.reducer
    },
});