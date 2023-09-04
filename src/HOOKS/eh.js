import React, {useReducer} from "react"

function reducer(state,action){
    console.log(state,action);
    if(action.type==='increment') {
        return state+1;
    }
    if (action.type==='decrement') {
        return state - 1;
    }
}
function UR2(){
    const [state,dispatch] = useReducer(reducer,10)
    return (
        <div>
            <h1>
                {state}
            </h1> <br/>
            <button onClick={()=> dispatch({type:'increment'})}> + </button>
            <button onClick={()=> dispatch({type:'decrement'})}> - </button>
        </div>
    )
} 
export default UR2