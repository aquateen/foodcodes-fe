import React from 'react';
import './PromoItem.scss';
import postmatesLogo from './postmates.png';
import uberEatsLogo from './ubereats.png';

function PromoItem({service, code}) {
  const logos = {
    postmates: postmatesLogo,
    ubereats: uberEatsLogo
  }

  return (
    <div className="PromoItem">
      <figure className="image is-64x64">
        <img src={logos[service]} alt={service} />
      </figure>
      <p>{code}</p>
    </div>
  );
}

export default PromoItem;
