import React from 'react';

export const PriceDetails = (props) => {
  const priceData = props.priceData;
  const priceStyle = (Math.sign(priceData.change) < 0) ? "neg" : "pos";

  return (
    <div className="details-header__price col-lg-4 col-md-6 col-sm-12">
      <div className="row">
        <div className="col-7">
          <div className="details-header__price-current">
            <span className="price">{priceData.price}</span>
            <span className="currency">{props.currency}</span>
          </div>
          <div className="details-header__price-change">
            <span className={priceStyle}>
              {priceData.change} ({priceData.percent}%)
            </span>
          </div>
        </div>
        <div className="col-5">
          <div className="details-header__price-date">
            Last Updated Close: {priceData.date}
          </div>
        </div>
      </div>
    </div>
  )
}
