import React from 'react';
import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer';
import Employee from './components/Employee';

function App() {
  return (
    <React.Fragment>
      <h1 className="text-warning">Test</h1>
      <i className="fa fa-home fa-2x"></i>
      <Customer name="John" age={26} title="Frontend Developer"/>
      <Employee name="Tim" age={38} title="CEO"/>
    </React.Fragment>
  );
}

export default App;
