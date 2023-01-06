import './Board.css';

const Board=({pixels,clickHandler})=>{
    return (
        <div className="board">
            {pixels.map((pixel,index)=>(
                <div key={index} style={{backgroundColor: pixel}} onClick={()=>clickHandler(index)}></div>
            ))}
        </div>
    );
}

export default Board;