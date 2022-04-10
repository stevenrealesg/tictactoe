import Cell from "./Cell";

function Board() {
    const handleClick = (index) => {
        console.log("presionando", index)
    }

    return (
        <div className="board">
            <Cell index={0} handleClick={handleClick}/>
            <Cell index={1} handleClick={handleClick}/>
            <Cell index={2} handleClick={handleClick}/>
            <Cell index={3} handleClick={handleClick}/>
            <Cell index={4} handleClick={handleClick}/>
            <Cell index={5} handleClick={handleClick}/>
            <Cell index={6} handleClick={handleClick}/>
            <Cell index={7} handleClick={handleClick}/>
            <Cell index={8} handleClick={handleClick}/>
        </div>
    );
}

export default Board;