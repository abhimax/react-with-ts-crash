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
    <div className="container">
      <div className="row">
        <h1 className="text-warning m-1"> <i className="fa fa-home"></i>Play React TS</h1>
      </div>

      <div className="row">
        <div className="col col-md-4">
          <Customer name="John" age={26} title="Frontend Developer" />
        </div>
        <div className="col col-md-4">
          <Employee name="Tim" age={38} title="CEO" />
        </div>

        <div className="col col-md-4">
          <Counter></Counter>
        </div>
      </div>

      <div className="row">
        <div className="col col-md-4">
          <MedalProvider name="Tom" />
        </div>
        <div className="col col-md-4">
          <LoginForm />
        </div>
      </div>
      
      <div className="row">
        <UserList />
      </div>

    </div>
  );
}

export default App;
