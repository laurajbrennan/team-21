import React, { Component } from "react";
import { Link } from "react-router-dom";
import Explainer from "../../assets/images/explainer.png";

export class Home extends Component {
  state = { isLoggedIn: false, loading: true, user: {}, items: [] };
  render() {
    return (
      <main className="home">
        <div className="home__callout">
          <span className="home__callout-text">
            WE HELP PIKUP YOUR GROCERIES
          </span>
          <div className="home__text-container">
            <span className="home__text">
              Our new free service connects people who need grocery <br />
              delivery with able volunteers
            </span>
          </div>
          <div className="home__action-container">
            <Link to="/login">
              <button className="home__login button-dark">GET PICKUP</button>
            </Link>
            <Link to="/browse">
              <button className="home__signup button-light">VOLUNTEER</button>
            </Link>
          </div>
        </div>
        <div className="home__explainer"></div>
        <section className="about" id="about">
          <p className="about__title">ABOUT US</p>
          <span className="home__callout-text">
            Pikup is a free delivery matching <br />
            service to help people who can't <br />
            make it to the store for groceries.
          </span>
          <div className="about__container">
            <div className="about__text">
              Food delivery services are oversubscribed. And vulnarable people
              do not want to go inside grocery stores and be exposed during this
              time. Instead, volunteers are matched with a recipient in their
              neighbourhood by postal code to help with delivery. You can sign
              up as a volunteer shopper or as a recipient by clicking the button
              below.
              <div className="about__button">
                <Link to="/login">
                  <button className="home__login button-dark">
                    GET PICKUP
                  </button>
                </Link>
              </div>
            </div>
            <div className="about__image"></div>
          </div>
          <div className="about__hero">
            <span className="home__callout-text about__hero-title">
              THE CASE FOR PIKUP
            </span>
            <iframe
              width="100%"
              height="520"
              frameborder="0"
              src="https://yangsun.carto.com/builder/295070ad-54f8-45d6-a78a-52b62ae17e2b/embed"
              allowfullscreen
              webkitallowfullscreen
              mozallowfullscreen
              oallowfullscreen
              msallowfullscreen
            ></iframe>
            <div className="about__hero-text">
              placeholder for text about data we've gathered.
            </div>
          </div>
          <div className="about__explainer">
            <img src={Explainer} className="about__explainer-image" />
          </div>
          <div className="about__timeline"></div>
        </section>
      </main>
    );
  }
}

export default Home;
