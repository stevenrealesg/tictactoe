import Cell from "./Cell";

function Board({ data, setData, playerX, setPlayerX, winner }) {
    const handleClick = (index) => {
        if (!data[index] && !winner) {
            let newData = [...data]
            newData[index] = playerX ? 'X' : 'O'
            setData(newData)
            setPlayerX(!playerX)
        }
    }

    return (
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
    );
}

export default Board;