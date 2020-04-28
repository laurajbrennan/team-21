import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Home extends Component {
  state = { isLoggedIn: false, loading: true, user: {}, items: [] };
  render() {
    return (
      <main className="home">
        <div className="home__callout">
          <span className="home__callout-text">
            Pikup <br />
            High level explanation goes here
          </span>
        </div>
        <div className="home__explainer">
          <p className="home__text">Some kind of image can go here.</p>
        </div>
        <div className="home__action-container">
          <Link to="/browse">
            <button className="home__browse button-dark">Browse posts</button>
          </Link>
          <div className="home__id-container">
            <Link to="/login">
              <button className="home__login button-light">Login</button>
            </Link>
            <Link to="/signup">
              <button className="home__signup button-light">Sign up</button>
            </Link>
          </div>
        </div>
      </main>
    );
  }
}

export default Home;
