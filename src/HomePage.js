import React from 'react';
import NewUserSection from './NewUserSection';
import PromoSection from './PromoSection';
import SignupSection from './SignupSection';

function HomePage() {
  return (
    <section className="section food-bg">
      <div className="container">
        <div className="columns is-6">
          <NewUserSection />
          <PromoSection />
          <SignupSection />
        </div>
      </div>
    </section>
  );
}

export default HomePage;
