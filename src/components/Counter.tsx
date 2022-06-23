import React, { useState } from "react";

interface IProps{}
interface IStates{
    count : number,
}

let Counter:React.FC<IProps> = () => {
    let [state, setState] = useState<IStates>({
        count : 0
    });

let increment = ():void =>{
setState(
    {
        count : state.count + 1
    }
)
}

let decrement = ():void => {
    setState(
        {
           count : state.count - 1 
        }
    )
}
    return(
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="card m-1">
                            <div className="card-body">
                                <p className="h3">{state.count}</p>
                                <button className="btn btn-success m-1" onClick={increment}>Increment</button>
                                <button className="btn btn-danger m-1" onClick={decrement}>Decrement</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};
export default Counter;