import React, { useContext } from 'react';
import './sidebar.css';
import { assets } from '../assets/assetss';
import { context } from '../backend/context';

const Sidebar = () => {
  const {selectedAlgo,setSelectedAlgo} = useContext(context);
  return (
    <div className="sidebar">
  <div className="home">
    <img src={assets.home} alt="Home" />
    <p>Home</p>
  </div>
  <hr />
  <div className="sorts">
    <div className="Second">
      <img src={assets.sort} alt="Home" />
      <p>Sorts</p>
    </div>
    <p className="logarithmic">LOGARITHMIC</p>
    <ul>
      <li onClick={() => setSelectedAlgo('Quicksort')}>Quick Sort</li>
      <li onClick={() => setSelectedAlgo('Mergesort')}>Merge Sort</li>
      <li onClick={() => setSelectedAlgo('Heapsort')}>Heap Sort</li>
    </ul>

    <p className="quadratic">QUADRATIC</p>
    <ul>
      <li>Bubble Sort</li>
      <li>Selection Sort</li>
      <li>Insertion Sort</li>
    </ul>

    <p className="weird">WEIRD</p>
    <ul>
      <li>Bitonic Sort</li>
      <li>Radix Sort</li>
      <li>Shell Sort</li>
    </ul>
  </div>
</div>
  );
};

export default Sidebar;
