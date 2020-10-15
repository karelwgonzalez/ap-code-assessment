import React, { useState } from 'react';
import { Highlighter, AsyncTypeahead } from 'react-bootstrap-typeahead';
import { Button } from 'react-bootstrap';
import { fetchSymbols } from '../../data/api';
import './searchform.scss';

const SearchForm = (props) => {
  const [input, setInput] = useState("");
  const [symbols, setSymbols] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getSymbols = (query) => {
    setIsLoading(true);
    fetchSymbols(query).then(res => {
        setSymbols(res);
        setInput(query);
        setIsLoading(false);
    })
  }

  return (
    <div className="container searchform-container">
      <div className="input-group">
        <AsyncTypeahead
          id="symbol-search"
          labelKey={option => `${option.name} (${option.symbol})`}
          isLoading={isLoading}
          onSearch={getSymbols}
          options={symbols}
          renderMenuItemChildren={(option, { text }) => {
            return (
              <div onClick={(e) => props.onChange(option.symbol)}>
                <Highlighter search={text}>
                  {option.symbol}
                </Highlighter>
                <div>
                  <small>
                    <Highlighter search={text}>
                      {option.name}
                    </Highlighter>
                  </small>
                </div>
              </div>
            )
          }}
        />
        <div className="input-group-append">
          <Button type="submit" onClick={(e) => {props.onChange(input)}}>Search</Button>
        </div>
      </div>
    </div>
  );
}

export default SearchForm;