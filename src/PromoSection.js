import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PromoItem from './PromoItem';
import loadingGif from './loading.gif';

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
                <PromoItem service={promo.service} code={promo.code} added={promo.added_on} key={index} />
              ))) : (
              <p>Sorry, no activate promos right now!</p>
              )
          ) : (
            <div className="has-text-centered">
              <p className="title is-italic is-size-6">Loading promos...</p>
              <img src={loadingGif} alt="loading" />
            </div>
          )}
      </div>
    </div>
  );
}

export default PromoSection;
