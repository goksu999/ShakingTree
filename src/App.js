import React, { useEffect } from 'react';
import Basket from './Basket/Basket';
import Tree from './Tree/Tree';
import { useSelector, useDispatch } from 'react-redux';
import { shake, finishShake, reset } from './AppReducer';
import './App.scss';

function App(props) {
  const finalized = useSelector((state) => state.shake.finalize)
  const dispatch = useDispatch();

  const handleClick = () => {
    if(finalized) dispatch(reset())
    dispatch(shake());
    setTimeout(() => dispatch(finishShake()), 3000);
  };

  return (
    <div className="container">
      <div className="App">
        <Tree />
        <Basket />
      </div>
      <button onClick={() => handleClick()} style={{ alignSelf: "center", marginTop: "50px" }}>Shake tree</button>
    </div>
  );
}

export default App;
