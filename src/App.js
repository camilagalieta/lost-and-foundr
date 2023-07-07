import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import NewItem from './components/NewItem';
import LostItems from './components/LostItems';
import RecoveredItems from './components/RecoveredItems';
import Menu from './components/Menu'
import ItemCheckout from './components/ItemCheckout';

function App() {
  return (
    
    <Router>
      <div>
      <header>
        <Menu />
      </header>
      </div>
      <Routes>
        <Route path = '/' element = {<Home />} />
        <Route path = '/new-item' element = {<NewItem />} />
        <Route path = '/lost-items' element = {<LostItems />} />
        <Route path = '/recovered-items' element = {<RecoveredItems />} />
        <Route path = '/item-checkout' element = {<ItemCheckout />} />
      
      </Routes>
    </Router>
  );
}

export default App;
