import './App.css';
import Board from './components/Board'
import History from './components/History';

function App() {
  
  return (
    <div className="App">
      
      <div className='game'>
        <Board />
      </div>
      <div className='container-history'>
        <History />
      </div>
    </div>
  );
}

export default App;
