import React from 'react';
import logo from './logo.svg';
import './App.css';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
import DateTime from './components/DateTime';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        Stationary Site
        <DateTime />        
      </header>
      <div className="app-containers">
        <Products />
        <ShoppingCart/>
      </div>
    </div>
  );
}

export default App;
