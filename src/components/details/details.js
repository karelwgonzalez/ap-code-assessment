import React, { useEffect, useState } from 'react';
import { Collapse } from 'react-bootstrap';
import { fetchOverview, fetchGlobalQuote } from '../../data/api';
import { PriceDetails } from './pricedetails';

import './details.scss';

const SecurityDetails = (props) => {
  const [overview, setOverview] = useState({});
  const [globalQuote, setGlobalQuote] = useState({});
  const [open, setOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if(props.symbol) {
      fetchOverview(props.symbol).then(res => setOverview(res));
      fetchGlobalQuote(props.symbol).then(res => setGlobalQuote(res));
      setIsLoaded(true);
    }
  }, [props.symbol])

  if(isLoaded) {
    return (
      <div className="container details-container">
        <div className="row">
          <div className="details-header col-lg-8 col-md-6 col-sm-12">
            <div className="details-header__symbol">
              <h1>{overview.Exchange}: {overview.Symbol}</h1>
            </div>
            <div className="details-header__name">
              <h3>{overview.Name}</h3>
            </div>
          </div>
          <PriceDetails currency={overview.Currency} priceData={globalQuote} />
        </div>
        <div className="details-description" onClick={() => setOpen(!open)}>
          <h5>Description:</h5>
          <Collapse in={open} className="details-description__description">
            <p>{overview.Description}</p>
          </Collapse>
        </div>
      </div>
    )
  } else {
    return (<div></div>)
  }
}

export default SecurityDetails;