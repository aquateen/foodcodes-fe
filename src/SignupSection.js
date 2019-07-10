import React, { useState} from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import './SignupSection.scss';

function SignupSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const statusMessage = {
    success: 'You\'re all signed up!',
    invalid: 'Email must not be blank.',
    fail: 'Encountered a problem. Please try again later.'
  };
  const statusClass = {
    success: 'has-text-success',
    invalid: 'has-text-danger',
    fail: 'has-text-danger'
  };

  var bodyFormData = new FormData();

  const handleSubmit = (e) => {
      e.preventDefault();
      bodyFormData.set('email', email);

      if (email.length) {
        axios
          .post("https://foodcodes.herokuapp.com/signup",
            bodyFormData)
          .then(function (response) {
            setStatus('success');
          })
          .catch(function (error) {
            setStatus('fail');
          });
        setEmail('');
      } else {
        setStatus('invalid');
      }
  }

  const notificationStyle = statusClass[status] + ' subscribe notice has-text-centered is-size-6';

  return (
    <div className="SignupSection column is-one-quarter">
      <div className="box">
        <h2 className="title is-4">Get promos straight to your inbox!</h2>
        <form onSubmit={handleSubmit}>
          <div className={notificationStyle}>
            <p>{statusMessage[status]}</p>
          </div>
          <div className="field has-addons has-addons-centered">
            <div className="control">
              <input className="input"
                type="email"
                value={email}
                placeholder="Enter your email"
                onChange={e => setEmail(e.target.value)}
              />
            </div>
            <div className="control">
              <input className="button is-info" type="submit" value="Signup!" />
            </div>
          </div>
        </form>
        <p>
          Your email is kept private and you can <Link to="/unsubscribe/">unsubscribe</Link> at any time.
        </p>
      </div>
    </div>
  );
}

export default SignupSection;

