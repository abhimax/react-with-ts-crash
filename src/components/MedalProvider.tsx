import React, { useState } from "react";
interface IProps{
    name : string
}
interface IStates{
    medal : string
}
let MedalProvider: React.FC<IProps> = ({ name}) =>{
    let [state, setState] = useState<IStates> (
        {
            medal : "No Medals Mate, Work harder!"
        }
    );

    let setMedal = (medal : string) => {
        setState(
            {
                medal : medal
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
                                <p className="h3">{name}</p>
                                <p className="h1">{state.medal}</p>
                                <button className="btn btn-danger m-1" onClick={()=>setMedal("Bronze")}>Bronze</button>
                                <button className="btn btn-warning m-1" onClick={()=>setMedal("Silver")}>Silver</button>
                                <button className="btn btn-success m-1" onClick={()=>setMedal("Gold")}>Silver</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default MedalProvider;