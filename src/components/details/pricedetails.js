import React from 'react';

export const PriceDetails = (props) => {
  const priceData = props.priceData;

  const price = parseFloat(priceData.price).toFixed(2);
  const change = parseFloat(priceData.change).toFixed(2);
  const percent = parseFloat(priceData.percent).toFixed(2);

  /** we need to display the date the data is from so the user has some context
   *  but Date assumes midnight UTC if no time is provided (which it isn't from the API)
   *  so we need to fudge the timezone to UTC to compensate for this to get the correct
   *  date string to display
  */
  const date = new Date(priceData.date).toLocaleDateString('en-US', { timeZone: 'UTC' });

  const changeStyle = (Math.sign(priceData.change) < 0) ? "neg" : "pos";

  return (
    <div className="details-header__price container col-lg-4 col-md-6 col-sm-12">
      <div className="row">
        <div className="col-7">
          <div className="details-header__price-current">
            <span className="price">{price}</span>
            <span className="currency">{props.currency}</span>
          </div>
          <div className="details-header__price-change">
            <span className={changeStyle}>{change} ({percent}%)</span>
          </div>
        </div>
        <div className="col-5">
          <div className="details-header__price-date">
            Last Updated Close: {date}
          </div>
        </div>
      </div>
    </div>
  )
}
