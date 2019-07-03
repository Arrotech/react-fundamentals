import React from 'react';
import logo from './logo.svg';
import './App.css';
import Name from './components/Name' //import the Name component
import Arrotech from './components/Arrotech'

function App() {
  return (
    <div className="App">
      <Name/>
      <Arrotech/>
    </div>
  );
}

export default App;
