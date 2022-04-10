function Cell({handleClick, index, value}) {
    return ( 
        <button className="cell" onClick={()=>handleClick(index)}>{value}</button>
     );
}

export default Cell;