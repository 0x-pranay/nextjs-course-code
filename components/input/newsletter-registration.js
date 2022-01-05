import { useState } from 'react';
import classes from './newsletter-registration.module.css';

function NewsletterRegistration() {
  const [email, setEmail] = useState(null);

  function onChangeEmail(e) {
    if (e.target.validity.valid) {
      console.log('On change: ', e.target.value);
      setEmail(e.target.value);
    }
  }

  async function registrationHandler(event) {
    event.preventDefault();
    console.log('Form submitted', email);

    const res = await fetch('/api/newsletter', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    }).then((data) => data.json());

    console.log(res);

    // fetch user input (state or refs)
    // optional: validate input
    // send valid data to API
  }

  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <input
            type='email'
            id='email'
            placeholder='Your email'
            aria-label='Your email'
            onChange={onChangeEmail}
          />
          <button>Register</button>
        </div>
      </form>
    </section>
  );
}

export default NewsletterRegistration;
