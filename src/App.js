import React from 'react';
import CardClickFlip from './components/card/CardClickFlip';
import CardClickFlip2 from './components/card2/cardClickFlip2';
import './App.css';

function App() {
  return (
    <div className="App">
        <h1>Card Tricks</h1>
        <CardClickFlip />
        <CardClickFlip2 />
    </div>
  );
}

export default App;
