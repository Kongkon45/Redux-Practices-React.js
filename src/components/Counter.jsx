import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrementCounter, incrementCounter, resetCounter } from './../services/counterAction/CounterAction';

const Counter = () => {
    const count = useSelector((state)=> state.count);
    const dispatch = useDispatch();
    const handleIncrement = ()=>{
        dispatch(incrementCounter())
    }
    const handleReset = ()=>{
        dispatch(resetCounter())
    }
    const handleDecrement = ()=>{
        dispatch(decrementCounter())
    }
  return (
    <div>
        <h1>Count : {count}</h1>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleDecrement}>Decrement</button>
    </div>
  )
}

export default Counter