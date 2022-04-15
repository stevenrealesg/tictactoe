import { useEffect, useState } from 'react';
import Cell from "./Cell";
import StatusPlayer from "./StatusPlayer"
import history from "../services/history"

function Board({ setGameOver }) {

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
        setGameOver(false)
    }

    const handleClick = (index) => {
        if (!data[index] && !winner) {
            let newData = [...data]
            newData[index] = playerX ? 'X' : 'O'
            setData(newData)
            setPlayerX(!playerX)
        }
    }

    useEffect(() => {
        setCountMovs(c => c + 1)
        const status = verifyWinner(data)
        if (status.won || countMovs === 9) {
            setWinner({ ...status, date: new Date() })
        }
    }, [data])

    useEffect(() => {
        if(winner){
            history.create({
                date: winner.date,
                status: winner.won ? `Ganó ${winner.player}` : "Empatados"
            })
            setGameOver(true)
        }
    }, [winner])

    return (
        <>
            <div className='header'>
                <StatusPlayer player={playerX} winner={winner} handleClickRetry={handleClickRetry} />
            </div>
            <div className="board">
                <Cell index={0} handleClick={handleClick} value={data[0]} />
                <Cell index={1} handleClick={handleClick} value={data[1]} />
                <Cell index={2} handleClick={handleClick} value={data[2]} />
                <Cell index={3} handleClick={handleClick} value={data[3]} />
                <Cell index={4} handleClick={handleClick} value={data[4]} />
                <Cell index={5} handleClick={handleClick} value={data[5]} />
                <Cell index={6} handleClick={handleClick} value={data[6]} />
                <Cell index={7} handleClick={handleClick} value={data[7]} />
                <Cell index={8} handleClick={handleClick} value={data[8]} />
            </div>
        </>
    );
}

export default Board;