import { useState } from "react"

export const useCounter = (value = 0)=>{
    const [state,setState] = useState(value);
    const inc = ()=>{
        return setState(state +1)
    }
    const dec=() =>{
        return setState(state -1)
    }
    const reset = ()=>{
        return setState(0);
    }

    return {state,setState,inc,dec,reset}
}