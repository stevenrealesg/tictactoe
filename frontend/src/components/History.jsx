function History() {
    return ( 
        <div className="history">
            <div className="title"><h3>Historial:</h3></div>
            <ul>
                <li>{new Date().getTime()} - Ganó X</li>
                <li>{new Date().getTime()} - Ganó O</li>
                <li>{new Date().getTime()} - Ganó X</li>
                <li>{new Date().getTime()} - Ganó X</li>
                <li>{new Date().getTime()} - EmpataronX</li>
            </ul>
        </div>
     );
}

export default History;