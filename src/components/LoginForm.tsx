import React, { useState } from "react";
import { IUser } from "../models/IUser";
interface IProps{}
interface IStates{
        user : IUser;
}
let LoginForm:React.FC<IProps> = () => {
    let [state, setState] = useState<IStates>({
        user: {
            username: '',
            password:''
        }
    }
    );

let updateInput = (event : React.ChangeEvent<HTMLInputElement>):void =>{
    setState(
        {
            user :{
                ...state.user,
                [event.target.name] : event.target.value
            }
        }
    );

}

let login = (event:React.FormEvent<HTMLFormElement>):void => {
    event.preventDefault();
    alert(`Dou you want to login with this user? ${JSON.stringify(state.user)}`)
}

return(
    <React.Fragment>
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="card">
                        <div className="card-header text-center bg-primary text-white">
                            <p className="h4">Login here</p>
                        </div>
                        <div className="card-body">
                            <form onSubmit={login}>
                            <pre>{JSON.stringify(state.user)}</pre>
                                <div className="mb-2">
                                    <input required={true} type="text" name="username" value={state.user.username} className="form-control" placeholder="user name" onChange={updateInput}/>
                                </div>
                                <div className="mb-2">
                                    <input required={true} type="password" name="password" value={state.user.password} className="form-control" placeholder="password" onChange={updateInput}/>
                                </div>
                                <div className="mb-2">
                                    <input type="submit" className="btn btn-primary " value="login"/>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    </React.Fragment>
)
}
export default LoginForm;