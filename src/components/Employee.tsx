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
        <React.Fragment>
            <div className="card text-bg-secondary mb-3 m-1">
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

        </React.Fragment>
    )
};
export default Employee;