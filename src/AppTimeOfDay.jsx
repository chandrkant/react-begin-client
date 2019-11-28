import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
function App() {
  const date = new Date(2019,11,24,18);
  const hours = date.getHours();
  const style = {
    color: 'green',
    margin: '10px',
  }
  let timeOfDay
  if(hours<12){
    timeOfDay ='morning'
    style.color = 'green';
  }else if(hours>12 && hours<17){
    timeOfDay="agternoon"
    style.color = 'purple'
  }else{
    timeOfDay = 'night'
    style.color = 'orange'
  }
  return (
    <div style={style}>
    <h1>Good {timeOfDay}</h1>
    </div>
  );
}

export default App;
