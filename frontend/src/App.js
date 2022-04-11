import { useEffect, useState } from 'react';
import './App.css';
import Board from './components/Board'
import Header from './components/StatusPlayer';

function App() {
  const [data, setData] = useState(['', '', '', '', '', '', '', '', ''])
  const [playerX, setPlayerX] = useState(true)
  const [countMovs, setCountMovs] = useState(0)
  const [winner, setWinner] = useState(null)

  const verifyWinner = (infoBoard) => {
    const casesToWin = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [6, 4, 2]
    ]
    for (let i = 0; i < casesToWin.length; i++) {
      const [c1, c2, c3] = casesToWin[i]
      if (infoBoard[c1] && infoBoard[c1] === infoBoard[c2] && infoBoard[c1] === infoBoard[c3]) {
        return {
          won: true,
          player: infoBoard[c1]
        }
      }
    }

    return {
      won: false
    }
  }

  const handleClickRetry = () => {
    setData((['', '', '', '', '', '', '', '', '']))
    setPlayerX(true)
    setCountMovs(0)
    setWinner(null)
  }

  useEffect(() => {
    setCountMovs(countMovs + 1)
    const status = verifyWinner(data)
    if (status.won || countMovs == 9) {
      setWinner({ ...status, date: new Date })
    }
  }, [data])

  return (
    <div className="App">
      <div className='header'>
        <Header player={playerX} winner={winner} handleClickRetry={handleClickRetry} />
      </div>
      <div className='game'>
        <Board data={data} setData={setData} playerX={playerX} setPlayerX={setPlayerX} winner={winner} />
      </div>
    </div>
  );
}

export default App;
