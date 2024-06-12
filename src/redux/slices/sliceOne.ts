import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type CounterStateType = {
    value: number
};
const initialState : CounterStateType = {
    value: 0
};
export const counterOneSlice = createSlice({
    name: "counter1",
    initialState:initialState,
    reducers:{
        increment:(state) => {
            state.value = state.value + 1
        },
        decrement:(state) => {
            state.value = state.value - 1
        },


        reset:(state) => {
            state.value = initialState.value
        },
        incrementByAmount:(state, action: PayloadAction<number>) => {
            state.value = state.value + action.payload
        },
    },
});
export const {increment,decrement, reset, incrementByAmount} = counterOneSlice.actions