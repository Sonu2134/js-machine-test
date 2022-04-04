import React, { useState } from 'react'
import logo from './logo.svg';
import './App.css';
import ImageList from './ImageList';


function App() {
  const [data, setData] = useState([]);
  fetch("https://api.npoint.io/20c1afef1661881ddc9c")
    .then(res => res.json())
    .then(data => setData(data))
  return (
    <div>
      <ImageList />
    </div>
  );
}

export default App;
