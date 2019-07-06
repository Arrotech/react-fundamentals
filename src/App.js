import React from 'react';
import logo from './logo.svg';
import './App.css';
import Name from './components/Name' //import the Name component
import Arrotech from './components/Arrotech'
import Jsx from './components/Jsx'

function App() {
  return (
    <div className="App">
      <Name name="Harun" nickName="Arrotech" >
        <div>
          <p>This is a child of props</p>
        </div>
      </Name>
      <Arrotech name="Harun" nickName="Arrotech">
        <div>
          <button>Arrotech</button>
        </div>
      </Arrotech>
      <Jsx/>
    </div>
  );
}

export default App;
