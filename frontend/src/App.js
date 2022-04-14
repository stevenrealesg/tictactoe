import { useState } from 'react';
import './App.css';
import Board from './components/Board'
import History from './components/History';

function App() {

  const [gameOver, setGameOver] = useState(false)
  
  return (
    <div className="App">
      
      <div className='game'>
        <Board setGameOver={setGameOver}/>
      </div>
      <div className='container-history'>
        <History gameOver={gameOver} />
      </div>
    </div>
  );
}

export default App;
