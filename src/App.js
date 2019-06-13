import React from 'react';
import logo from './logo.svg';
import './App.css';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
import DateTimeComponent from './components/DateTimeComponent';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        Stationary Site
        <DateTimeComponent />        
      </header>
      <div className="app-containers">
        <Products />
        <ShoppingCart/>
      </div>
    </div>
  );
}

export default App;
