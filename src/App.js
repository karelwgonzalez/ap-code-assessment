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
    <div className="app container">
      <div className="row app__heading">
        <div className="col-12">
          <h1>Stock Search</h1>
        </div>
        <SearchForm onChange={handleChange} />
      </div>
      <div className="row app__body">
        <div className="col-12">
          <SecurityDetails symbol={symbol} />

        </div>
      </div>
    </div>
  );
}

export default App;