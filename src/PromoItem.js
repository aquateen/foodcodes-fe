import React from 'react';
import './PromoItem.scss';
import postmatesLogo from './postmates.png';
import uberEatsLogo from './ubereats.png';

function PromoItem({service, code, exact, added}) {
  const logos = {
    postmates: postmatesLogo,
    ubereats: uberEatsLogo
  }

  return (
    <div className="PromoItem">
      <figure className="image is-64x64">
        <img src={logos[service]} alt={service} />
      </figure>
      <div className="ItemText">
        {exact ? (
          <div>
            <span>{code.split(exact)[0]}</span>
            <code>{exact}</code>
            <span>{code.split(exact)[1]}</span>
          </div>
        ) : (
          <p>{code}</p>
        )}
        { added &&
          <p className="has-text-right is-italic has-text-weight-semibold has-text-grey-light is-size-7 added">
          added {added}
          </p>
        }
      </div>
    </div>
  );
}

export default PromoItem;
