import React from 'react';
import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer';
import Employee from './components/Employee';
import Counter from './components/Counter';
import MedalProvider from './components/MedalProvider';
import LoginForm from './components/LoginForm';
import UserList from './components/UserList';

function App() {
  return (
    <React.Fragment>
      <h1 className="text-warning m-1"> <i className="fa fa-home"></i>Play React TS</h1>
     
      <Customer name="John" age={26} title="Frontend Developer"/>
      <Employee name="Tim" age={38} title="CEO"/>
      <Counter></Counter>
      <MedalProvider name="Tom"/>
      <br/>
      <LoginForm/>
      <br/>
      <UserList/>
    </React.Fragment>
  );
}

export default App;
