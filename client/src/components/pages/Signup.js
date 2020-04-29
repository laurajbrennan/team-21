import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import { Redirect } from "react-router-dom";

export default function Signup() {
  const { updateUser } = useContext(UserContext);
  const [toBrowse, setToBrowse] = useState(false);
  const newUser = (event) => {
    event.preventDefault();
    let user = {
      name: event.target.name.value,
      username: event.target.username.value,
      email: event.target.email.value,
    };
    updateUser(user);
    document.querySelector(".signup__form").reset();
    setToBrowse(true);
  };

  return (
    <div className="signup">
      {toBrowse ? <Redirect to="/browse" /> : null}
      <form className="signup__form" action="submit" onSubmit={newUser}>
        <span className="login__title">SIGN UP FOR PIKUP</span>
        <div className="login__input">
          <h3 className="login__label">YOUR NAME</h3>
          <input
            className="login__name"
            placeholder="Your name goes here"
            name="name"
            required
          />
        </div>
        <div className="login__input">
          <h3 className="login__label">CHOOSE A USERNAME</h3>
          <input
            className="login__username"
            placeholder="Username"
            name="username"
            required
          />
        </div>
        <div className="login__input">
          <input type="radio" id="volunteer" name="type" value="volunteer" />
          <label for="volunteer">
            <h3 className="login__label radio">VOLUNTEER</h3>
          </label>
          <input type="radio" id="customer" name="type" value="customer" />
          <label for="customer">
            <h3 className="login__label radio">CUSTOMER</h3>
          </label>
        </div>
        <div className="login__input">
          <h3 className="login__label">YOUR EMAIL</h3>
          <input
            className="login__email"
            placeholder="you@youremail.com"
            name="email"
            required
          />
        </div>
        <div className="login__input">
          <h3 className="login__label">CHOOSE A PASSWORD</h3>
          <input
            className="login__password"
            placeholder="Must be at least 8 characters, letters and numbers"
            name="password"
            type="password"
            required
          />
        </div>
        <div className="login__button-container">
          <Link to="/login">
            <span className="login__signup-link">
              Already have an <br />
              account? Log in here.
            </span>
          </Link>
          <button type="submit" className="signup__submit-button">
            Create account and login
          </button>
        </div>
      </form>
    </div>
  );
}
