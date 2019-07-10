import React from 'react';
import { Link } from "react-router-dom";

function Header() {
  return (
    <section className="section has-background-primary">
      <div className="container">
        <Link to="/">
          <h1 className="title is-1 has-text-centered has-text-white has-text-weight-bold">
            FOOD CODES
          </h1>
        </Link>
        <h2 className="subtitle is-4 has-text-centered has-text-white">
          Save on delivery apps!
        </h2>
      </div>
    </section>
  );
}

export default Header;
