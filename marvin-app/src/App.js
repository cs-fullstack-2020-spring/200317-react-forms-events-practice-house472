import React from 'react';
import logo from './logo.svg';
import './App.css';
import AlbumContainer from './components/AlbumContainer'
import {Route, NavLink, HashRouter} from "react-router-dom";
function App() {
  return (
    <div className="App">
      
      <AlbumContainer/>
      
    </div>
  );
}

export default App;