import {FaPaintBrush,FaEraser} from 'react-icons/fa';

import './Toolbox.css';

const Toolbox=({tool,changeTypeHandler,changeHandler,clearHandler})=>{
    return (
        <div className="toolbox">
            <div className="options">
                <h2 className="options-title">選擇:</h2>
                <p className={tool.type==="brush"?"tool tool-active":"tool"} onClick={()=>changeTypeHandler("brush")}><FaPaintBrush />&nbsp;Brush</p>
                <p className={tool.type==="eraser"?"tool tool-active":"tool"} onClick={()=>changeTypeHandler("eraser")}><FaEraser />&nbsp;Eraser</p>
            </div>
            <div className="grids">
                <h2 className="grids-title">格數:</h2>
                <input type="number" className="input" name="grids" value={tool.grids} onChange={changeHandler} />
            </div>
            <div className="color">
                <h2 className="color-title">顏色:</h2>
                <input type="color" className="input" name="color" value={tool.color} onChange={changeHandler} disabled={tool.type==="eraser"} />
            </div>
            <button className="btn btn-clear" onClick={clearHandler}>全部清除</button>
        </div>
    );
}

export default Toolbox;