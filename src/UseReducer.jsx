import { type } from "@testing-library/user-event/dist/type";
import { useReducer } from "react";
const reduceFn = (currentCounter,action)=>{
    switch(action.type){
        case 'INCREMENT':
            return currentCounter +1;
        case 'DECREMENT':
            return currentCounter - 1;
        case 'REST':
            return 0;
        case 'SET_VALUE':
            return action.newCounterValue;
    }
    return 0;

}
const UseReducer = ()=>{
const [counter,dispatch] = useReducer(reduceFn,0);
const onIncrement = () =>{
    dispatch({type: 'INCREMENT'});
}
const onDecrement = () =>{
    dispatch({type: 'DECREMENT'});
}
const onReset = () =>{
    dispatch({type: 'REST'});
}
const onSetToValue = () =>{
    dispatch({type: 'SET_VALUE', newCounterValue : 500});
}
    return (
<div>
    <h1>Counter {counter}</h1>
<button type="button" onClick={onIncrement}>INCREMENT</button>
<button type="button" onClick={onDecrement}>DECREMENT</button>
<button type="button" onClick={onReset}>REST</button>
<button type="button" onClick={onSetToValue}>SET_VALUE</button>


</div>
    );
}
export default UseReducer;