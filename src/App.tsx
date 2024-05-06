import React from 'react';
import {useAppSelector} from "./hooks/useAppSelector";

import {useAppDispatch} from "./hooks/useAppDispatch";
import {decrement, increment, incrementByAmount, reset} from "./redux/slices/sliceOne";


const App = () => {

    const {value} = useAppSelector( (state) => state.slice1)
    const dispatch = useAppDispatch()

    return (
        <div>
            <h1>Number: {value}</h1>
            <button onClick={() => {
                dispatch(increment())
            }}>Increment
            </button>
            <hr/>
            <button onClick={() => {
                dispatch(decrement())
            }}>Decrement
            </button>
            <hr/>
            <button onClick={() => {
                dispatch(reset())
            }}>Reset
            </button>
            <hr/>
            <button onClick={() => {
                dispatch(incrementByAmount(100))
            }}>+100
            </button>
        </div>
    );
};

export default App;