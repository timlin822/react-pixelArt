import {useState,useEffect} from 'react';

import Toolbox from 'components/toolbox/Toolbox';
import Board from 'components/board/Board';

import './App.css';

function App() {
  const [tool,setTool]=useState({
    type: "brush",
    grids: 20,
    color: "#003366"
  });
  const {grids,color}=tool;
  const [pixels,setPixels]=useState(Array.from({length: grids*grids},()=>"#fff"));
  const [prevColor,setPrevColor]=useState(color);

  useEffect(()=>{
    document.querySelector(".board").style.setProperty("--grids",grids);
    setPixels(Array.from({length: grids*grids},()=>"#fff"));
  },[grids]);
  useEffect(()=>{
    if(color!=="#ffffff"){
      setPrevColor(color);
    }
  },[color]);

  const changeTypeHandler=(type)=>{
    if(type==="eraser"){
      setTool({
        ...tool,
        type,
        color: "#ffffff"
      });
    }
    else{
      setTool({
        ...tool,
        type,
        color: prevColor
      });
    }
  };

  const changeHandler=(e)=>{
    if(e.target.name==="grids"){
      setTool({
        ...tool,
        type: "brush",
        color: prevColor,
        [e.target.name]: e.target.value
      });
    }
    else{
      setTool({
        ...tool,
        [e.target.name]: e.target.value
      });
    }
  };

  const clickHandler=(i)=>{
    setPixels(pixels.map((pixel,index)=>index===i?color:pixel));
  };

  const clearHandler=()=>{
    setPixels(Array.from({length: grids*grids},()=>"#fff"));
  };

  return (
    <section className="section-padding bg-height bg-color">
      <div className="container container-padding">
        <div className="flex">
          <Toolbox tool={tool} changeTypeHandler={changeTypeHandler} changeHandler={changeHandler} clearHandler={clearHandler} />
          <Board pixels={pixels} clickHandler={clickHandler} />
        </div>
      </div>
    </section>
  );
}

export default App;