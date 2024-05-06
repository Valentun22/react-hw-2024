import {configureStore} from "@reduxjs/toolkit";
import {userSlice} from "../userSlice";
import {useDispatch, useSelector} from "react-redux";
import {postSlice} from "../postSlice";

export const store = configureStore({
    reducer:{
        userSlice: userSlice.reducer,
        postSlice: postSlice.reducer
    }
});
export const useAppUserDispatch = useDispatch.withTypes<typeof store.dispatch>();
export const useAppUserSelector= useSelector.withTypes<ReturnType<typeof store.getState>>();
export const useAppPostDispatch = useDispatch.withTypes<typeof store.dispatch>();
export const useAppPostSelector= useSelector.withTypes<ReturnType<typeof store.getState>>();
