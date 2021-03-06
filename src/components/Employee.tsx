import React, { useState } from "react";
interface IProps {
    name?: string;
    age?: number;
    title?: string;
}

interface IState {
    marks: number;
    medal: string;
}


let Employee: React.FC<IProps> = ({ name, age, title }) => {
    let [state, setState] = useState<IState>({
        marks: 89,
        medal: "Gold",
    });
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                <div className="card text-bg-secondary mb-3">
                <div className="card-header">{title}</div>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{age}</p>
                    <ul className="list-group">
                        <li className="list-group-item">{`Mark: ${state.marks}`}</li>
                        <li className="list-group-item">{`Medal: ${state.medal}`}</li>
                    </ul>
                </div>
            </div>
                </div>
            </div>


        </div>
    )
};
export default Employee;