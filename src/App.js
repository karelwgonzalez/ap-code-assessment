import React, { useState } from 'react';
import './App.scss';
import SearchForm from './components/searchform/searchform';
import SecurityDetails from './components/details/details';

const App = () => {
  const [symbol, setSymbol] = useState("");

  const handleChange = (symbol) => {
    setSymbol(symbol);
  }

  return (
    <div className="App">
      <SearchForm onChange={handleChange} />
      <SecurityDetails symbol={symbol} />
    </div>
  );
}

export default App;