import './App.css';
import Board from './components/Board'

function App() {
  return (
    <div className="App">
      <div className='header'> Turno para: X</div>
      <div className='game'>
        <Board />
      </div>
    </div>
  );
}

export default App;
