import { DECRREMENT, INCREMENT, RESET } from "../counterConstants/CounterConstants"

export const incrementCounter = ()=>{
    return{
        type : INCREMENT
    }
}

export const decrementCounter = ()=>{
    return{
        type : DECRREMENT
    }
}

export const resetCounter = ()=>{
    return{
        type : RESET
    }
}
