function Next({player}) {
    return (
        <h2>
            Turno para: {player ? 'X' : 'O'}
        </h2>
    );
}

function Won({player, handleClickRetry}) {
    return (
        <h1>
            El jugador <u>{player}</u> ha ganado.
            <button className="btnPlayAgain" onClick={handleClickRetry}>Jugar nuevamente</button>
        </h1>
    );
}

function Tied({handleClickRetry}) {
    return (
        <h1>
            Los jugadores han empatado.
            <button className="btnPlayAgain" onClick={handleClickRetry}>Jugar nuevamente</button>
        </h1>
    );
}

function StatusPlayer({player, winner, handleClickRetry}) {
    if(!winner){
        return <Next player={player}/>
    }else if(winner.won){
        return <Won player={winner.player} handleClickRetry={handleClickRetry} />
    }else{
        return <Tied handleClickRetry={handleClickRetry} />
    }
}

export default StatusPlayer;