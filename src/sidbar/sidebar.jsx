import React, { useContext } from 'react';
import './sidebar.css';
import { assets } from '../assets/assetss';
import { context } from '../backend/context';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const {selectedAlgo,setSelectedAlgo} = useContext(context);
  return (
    <div className="sidebar">
  <div className="home">
    <img src={assets.home} alt="Home" />
    <Link to='/'><p>Home</p></Link>
  </div>
  <hr />
  <div className="sorts">
    <div className="Second">
      <img src={assets.sort} alt="Home" />
      <Link to='/sorts'><p>Sorts</p></Link>
    </div>
    <p className="logarithmic">LOGARITHMIC</p>
    <ul>
      <li onClick={() => setSelectedAlgo('Quicksort')}>Quick Sort</li>
      <li onClick={() => setSelectedAlgo('Mergesort')}>Merge Sort</li>
      <li onClick={() => setSelectedAlgo('Heapsort')}>Heap Sort</li>
    </ul>

    <p className="quadratic">QUADRATIC</p>
    <ul>
      <li onClick={() => setSelectedAlgo('Bubblesort')}>Bubble Sort</li>
      <li onClick={() => setSelectedAlgo('Shakersort')}>Shaker Sort</li>
      <li onClick={() => setSelectedAlgo('Selectionsort')}>Selection Sort</li>
      <li onClick={() => setSelectedAlgo('Insertionsort')}>Insertion Sort</li>
      <li onClick={() => setSelectedAlgo('Pancakesort')}>Pancakesort</li>
      <li onClick={() => setSelectedAlgo('Oddevensort')}>Odd even sort</li>
    </ul>

    <p className="weird">WEIRD</p>
    <ul>
      <li onClick={() => setSelectedAlgo('Bitonicsort')}>Bitonic Sort</li>
      <li onClick={() => setSelectedAlgo('Shellsort')}>Shell Sort</li>
      <li onClick={() => setSelectedAlgo('Radixsort')}>Radix Sort</li>
      <li onClick={() => setSelectedAlgo('Combsort')}>Comb Sort</li>
      <li onClick={() => setSelectedAlgo('Bongosort')}>Bongo Sort</li>
      <li onClick={() => setSelectedAlgo('Stoogesort')}>Stooge Sort</li>
    </ul>
  </div>
</div>
  );
};

export default Sidebar;
