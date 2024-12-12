import React, { useContext, useEffect, useState } from 'react';
import './visualiser.css';
import Naavbar from '../component/navbar';
import { context } from '../backend/context';
import Sidebar from '../sidbar/sidebar';
import * as Algorithms from './Algorithms';

const Visualiser = () => {
  const [array, setArray] = useState([]);
  const [size, setSize] = useState(50);
  const [sortingSpeed, setSortingSpeed] = useState(50);
  const { extended } = useContext(context);
  const [sorting, setSorting] = useState(false);
  const [selectedAlgo, setSelectedAlgo] = useState('mergesort');

  const [color,setColor] = useState([]);

  useEffect(() => {
    resetArray();
  }, [size]);

  const resetArray = () => {
    const newArray = [];
    for (let i = 0; i < size; i++) {
      newArray.push(randomFromInterval(10, 700));
    }
    setArray(newArray); 
  };
  

  const randomFromInterval = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

  
  const visualiseArray = async (index, value,index2,value2,iscomparing = false) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        setArray((prevArray) => {
          const newArray = [...prevArray];
        if (value !== undefined) newArray[index] = value;
        if (value2 !== undefined) newArray[index2] = value2;
        
        const selectedcolor = newArray.map((_,i)=>
          i === index || i === index2 ? (iscomparing ? "red" : "cyan") : "default"
        )
        
        setColor(selectedcolor);

          return newArray;
        });
        resolve();
      }, sortingSpeed); 
    });
  };
  
  
  // const arraysAreEqual = (arr1, arr2) => arr1.length === arr2.length && arr1.every((val, index) => val === arr2[index]);
  
  const startSorting = async () => {
    setSorting(true);
    const sortingAlgo = Algorithms[selectedAlgo];
    if (sortingAlgo) {
      await sortingAlgo([...array], visualiseArray);
    }
    // const sorted = [...array].sort((a, b) => a - b);
    // console.log(arraysAreEqual(sorted, array)); 
    setSorting(false);
  };
  
  const containerWidth = 800;
  const barWidth = Math.max(Math.floor(containerWidth / array.length), 2);
  return (
    <>
      <Naavbar />
      {extended && <Sidebar />}
      <div className="bg">
        <div className="graphs">
          {array.map((i, ind) => (
            <div
            className={`graph ${color[ind]}`}
              key={ind}
              style={{
                height: `${i * 0.8}px`,
                width: `${barWidth}px`,
                
              }}
            ></div>
          ))}
        </div>
        <hr className="divider" />
        <div className="controls">
          <button className="btn btn-info" onClick={() => resetArray()} disabled={sorting}>Generate New</button>
          <div className="slider_div">
            <input 
              onChange={(e) => setSize(Number(e.target.value))} 
              type="range" 
              id="slider" 
              className="slider" 
              min="10" 
              max="500" 
              value={size}
              disabled={sorting}
            />
            <span>Elements: {size}</span>
          </div>
          <div className="slider_div">
            <input 
              onChange={(e) => setSortingSpeed(Number(e.target.value))} 
              type="range" 
              id="speed-slider" 
              className="slider" 
              min="10" 
              max="500" 
              value={sortingSpeed}
            />
            <span>Speed: {sortingSpeed}ms</span>
          </div>
          <button 
            className="btn btn-info" 
            disabled={sorting}
            onClick={() => startSorting()} 
            style={{ marginLeft: '50px' }}
          >
            Sort
          </button>
        </div>
      </div>
    </>
  );
};

export default Visualiser;
