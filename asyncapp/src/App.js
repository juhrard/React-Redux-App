import React from 'react';
import './App.css';

// Components
import Dashboard from './components/Dashboard';
import NavBar from './components/NavBar'

function App() {
  return (
    <div className="App">
      <NavBar />
      <h1 style={{color: 'white'}}>FFXIV Character/Role Search</h1>
      <Dashboard />
    </div>
  );
}

export default App;
