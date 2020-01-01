import React from 'react';
import './App.css';
import Game from './Containers/game/game';
import GameHeader from './Containers/GameHeder/index';

function App() {
  return (
    <div className="App">
      <GameHeader/>
      <Game/>
    </div>
  );
}

export default App;
