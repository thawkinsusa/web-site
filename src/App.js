import React, {Component} from 'react';
import './App.css';
import DropDown from './components/DropDown'

function App() {
  return (
    <div className="App">
      <div className="nav-container">
        <div className="nav-logo">Start Bootstrap
        </div>
        <div className="nav-options">
          <div className='nav'>SERVICES</div>
          <div className='nav'>PORTFOLIO</div>
          <div className='nav'>ABOUT</div>
          <div className='nav'>TEAM</div>
          <div className='nav'>CONTACT</div>
          <DropDown/>
          </div>
        </div>
      <div className='background-img'>
        <div className='background-welcome-studio'>Welcome To Our Studio!</div>
        <div className='background-welcome'>IT'S NICE TO MEET YOU</div>
        <button className='tell-more-button'>TELL ME MORE</button>
      </div>


      <div className='background-container'></div>
      <div className='whitespace-service-container'>
        <div className='services-top'>Services</div>
        <div className='services-bottom'>lorean something who cares</div>
      </div>

    </div>
  );
}

export default App;
