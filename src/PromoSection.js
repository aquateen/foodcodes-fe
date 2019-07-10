import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PromoItem from './PromoItem';

function PromoSection() {
  const [promos, setPromos] = React.useState();

  useEffect(() => {
    axios
      .get("https://foodcodes.herokuapp.com")
      .then(({ data }) => {
        setPromos(data.promos);
      });

  }, []);

  return (
    <div className="PromoSection column is-one-half">
      <div className="box">
        <h2 className="title is-4">Existing users:</h2>
          {promos ? (
            promos.length ? (
              promos.map((promo, index) => (
                <PromoItem service={promo.service} code={promo.code} key={index} />
              ))) : (
              <p>Sorry, no activate promos right now!</p>
              )
          ) : (
            <p>Loading...</p>
          )}
      </div>
    </div>
  );
}

export default PromoSection;
