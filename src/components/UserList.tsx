import React, { useState } from "react";
import { IUsers } from "../models/IUsers";
import { UserService } from "../services/UserService";
interface IProps { }
interface IStates {
    users: IUsers[]
}
let UserList: React.FC<IProps> = () => {
    let [state, setState] = useState(
        {
            users: UserService.getAllUsers()
        }
    );
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <p className="h3">Users</p>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <table className="table table-striped text-center table-hover">
                        <thead className="bg-dark text-white">
                            <tr>
                                <th>SNO</th>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Designation</th>
                                <th>Company</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                state.users.length > 0 && state.users.map((value, key) => {
                                    return <tr key={key}>
                                        <td>{value.sno}</td>
                                        <td>{value.name}</td>
                                        <td>{`${value.age} years`}</td>
                                        <td>{value.designation}</td>
                                        <td>{value.company}</td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default UserList;