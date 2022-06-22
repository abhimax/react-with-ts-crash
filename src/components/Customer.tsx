import React from 'react';
interface IProps{
    name : string;
    age?: number;
    title: string;

};

let Customer:React.FC<IProps> = ({ name , age, title }) => {
return(
    <React.Fragment>
    <div className="card text-bg-secondary mb-3 m-1">
                <div className="card-header">{title}</div>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{age}</p>
                </div>
            </div>
    </React.Fragment> 
)
}; 

export default Customer;