const apiURL = "https://www.alphavantage.co/query"
const api_key = process.env.REACT_APP_API_KEY;

export const fetchSymbols = (query) => {
  if(process.env.REACT_APP_USE_TEST_DATA === 'false') {
    return fetch(`${apiURL}?function=SYMBOL_SEARCH&apikey=${api_key}&keywords=${query}`)
      .then(res => res.json())
      .then(
        (json) => {
          /**
           * For the form we only really need the symbol and the name,
           * so we map those to clean up the results
           */
          const symbols = json.bestMatches.map((symbol) => {
            return { "symbol": symbol['1. symbol'], "name": symbol['2. name'] }
          });
          return symbols;
        }
      );
  } else {
    return fetch('./testdata.json')
    .then(res => res.json())
    .then((json) => json.symbols);
  }
}

export const fetchOverview = (symbol) => {
  if(process.env.REACT_APP_USE_TEST_DATA === 'false') {
    return fetch(`${apiURL}?function=OVERVIEW&apikey=${api_key}&symbol=${symbol}`)
      .then(res => res.json())
      .then(
        (json) => {
          return(json);
        }
      );
  } else {
    return fetch('./testdata.json')
    .then(res => res.json())
    .then((json) => json.overview[symbol]);
  }
}

export const fetchGlobalQuote = (symbol) => {
  if(process.env.REACT_APP_USE_TEST_DATA === 'false') {
    return fetch(`${apiURL}?function=GLOBAL_QUOTE&apikey=${api_key}&symbol=${symbol}`)
      .then(res => res.json())
      .then(
        (json) => {
          /**
           * Sanitize the names from the API and remove some we aren't displaying
           */
          const data = json['Global Quote'];
          return {
            "price": data["05. price"],
            "change": data["09. change"],
            "date": data["07. latest trading day"],
            "percent": data["10. change percent"],
          };
        }
      );
  } else {
    return fetch('./testdata.json')
    .then(res => res.json())
    .then((json) => json.globalquote[symbol]);
  }
}