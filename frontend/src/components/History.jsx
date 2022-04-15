import { useEffect, useState } from 'react';
import history from '../services/history'

function History({ gameOver }) {
    const [data, setData] = useState([])
    const getData = async () => {
        let result = await history.getList()
        setData(result.response)
    }

    const formatDate = (date) => {
        const nDate = new Date(date)
        return `${nDate.toLocaleDateString()} ${nDate.toLocaleTimeString()}`
    }

    useEffect(() => {
        !gameOver && getData()
    }, [gameOver])
    
    return ( 
        <div className="history">
            <div className="title"><h3>Historial:</h3></div>
            <ul>
                {data && data.map(el => <li key={el.id}>{formatDate(el.date)} - {el.status}</li>)}
            </ul>
        </div>
     );
}

export default History;