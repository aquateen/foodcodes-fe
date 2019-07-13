import React from 'react';
import './PromoItem.scss';
import postmatesLogo from './postmates.png';
import uberEatsLogo from './ubereats.png';

function PromoItem({service, code, exact}) {
  const logos = {
    postmates: postmatesLogo,
    ubereats: uberEatsLogo
  }

  return (
    <div className="PromoItem">
      <figure className="image is-64x64">
        <img src={logos[service]} alt={service} />
      </figure>
      {exact ? (
        <div>
          <span>{code.split(exact)[0]}</span>
          <code>{exact}</code>
          <span>{code.split(exact)[1]}</span>
        </div>
      ) : (
        <p>{code}</p>
      )}
    </div>
  );
}

export default PromoItem;
