import React, { useState } from 'react'
import logo from './logo.svg';
import './App.css';
import ImageList from './ImageList';


function App() {
  const [data, setData] = useState([]);

  return (
    <div>
      <ImageList />
      <h1>hewllo</h1>
    </div>
  );
}

export default App;
