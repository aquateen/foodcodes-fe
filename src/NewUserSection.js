import React from 'react';
import PromoItem from './PromoItem';

function NewUserSection() {
  const postmates_signup = "Use code s3cit when signing up!"
  const ubereats_signup = "Use code eats-hgm1r when signing up!"

  return (
    <div className="column is-one-quarter">
      <div className="box">
        <h2 className="title is-4">First time users:</h2>
        <PromoItem service="postmates" code={postmates_signup} key="0" />
        <PromoItem service="ubereats" code={ubereats_signup} key="1" />
      </div>
    </div>
  );
}

export default NewUserSection;
