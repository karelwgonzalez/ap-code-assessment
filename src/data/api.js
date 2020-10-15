const apiURL = "https://www.alphavantage.co/query"
const api_key = process.env.REACT_APP_API_KEY;

const objectIsEmpty = (obj) => {
  return JSON.stringify(obj) === '{}';
}

export const fetchSymbols = (query) => {
  if(process.env.REACT_APP_USE_TEST_DATA === 'false') {
    return fetch(`${apiURL}?function=SYMBOL_SEARCH&apikey=${api_key}&keywords=${query}`)
      .then(res => res.json())
      .then((json) => {
          if(objectIsEmpty(json)) {
            return {"error": "nodata"}
          } else if(json.Note) {
            return {"error": "limit"};
          } else {
            /**
             * For the form we only really need the symbol and the name,
             * so we map those to clean up the results
             */
            const symbols = json.bestMatches.map((symbol) => {
              return {
                "symbol": symbol['1. symbol'],
                "name": symbol['2. name']
              }
            });
            return symbols;
          }
      });
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
          if(objectIsEmpty(json)) {
            return {"error": "nodata"}
          } else if(json.Note) {
            return {"error": "limit"};
          } else {
            return json;
          }
        }
      );
  } else {
    return fetch('./testdata.json')
    .then(res => res.json())
    .then((json) => {
        return json.overview[symbol]
    });
  }
}

export const fetchGlobalQuote = (symbol) => {
  if(process.env.REACT_APP_USE_TEST_DATA === 'false') {
    return fetch(`${apiURL}?function=GLOBAL_QUOTE&apikey=${api_key}&symbol=${symbol}`)
      .then(res => res.json())
      .then((json) => {
        const data = json['Global Quote'];

        if(objectIsEmpty(data)) {
          return {"error": "nodata"};
        } else if(json.Note) {
          return {"error": "limit"};
        } else {
          /**
           * Sanitize the names from the API and remove some we aren't displaying
           */
          return {
            "price": parseFloat(data["05. price"]).toFixed(2),
            "change": parseFloat(data["09. change"]).toFixed(2),
            "percent": parseFloat(data["10. change percent"]).toFixed(2),
            /** we need to display the date the data is from so the user has some context
             *  but Date assumes midnight UTC if no time is provided (which it isn't from the API)
             *  so we need to fudge the timezone to UTC to compensate for this to get the correct
             *  date string to display
            */
            "date": new Date(data["07. latest trading day"])
            .toLocaleDateString('en-US', { timeZone: 'UTC' })
          };
        }
      });
  } else {
    return fetch('./testdata.json')
    .then(res => res.json())
    .then((json) => json.globalquote[symbol]);
  }
}