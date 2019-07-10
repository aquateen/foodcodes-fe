import React, { useState} from 'react';
import axios from 'axios';
import './UnsubscribePage.scss';

function UnsubscribePage() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const statusMessage = {
    success: 'You\'ve been unsubscribed.',
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
          .post("https://foodcodes.herokuapp.com/unsubscribe",
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

  const notificationStyle = statusClass[status] + ' unsubscribe notice has-text-centered is-size-6';

  return (
    <section className="section food-bg">
      <div className="columns">
        <div className="column is-one-third is-offset-one-third">
          <div className="box">
            <h2 className="title has-text-centered is-4">Unsubscribe</h2>
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
                  <input className="button is-info" type="submit" value="Unsubscribe" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default UnsubscribePage;
