import React, { Component } from "react";
import { UserContext } from "../../contexts/UserContext";
import axios from "axios";
import { Link } from "react-router-dom";

export default class MyItems extends Component {
  state = { loading: true, user: {}, loggedIn: false, items: [] };
  static contextType = UserContext;

  componentDidMount() {
    const { user } = this.context;
    if (user[0].username !== "") {
      axios.get("http://localhost:5000/items").then(array => {
        const newArray = array.data.filter(
          item => item.ownedBy === user[0].username
        );
        this.setState({
          loggedIn: true,
          loading: false,
          user: user[0],
          items: newArray
        });
      });
    } else {
      this.setState({ loading: false, loggedIn: false });
    }
  }

  render() {
    const makeItems = this.state.items.map(item => {
      return (
        <div className="myitems__item" key={item.id}>
          {item.type === "OFFERED: " ? (
            <div className="item__icon--offered"></div>
          ) : (
            <div className="item__icon--wanted"></div>
          )}
          <Link className="myitems__link" to={`/browse/${item.id}`}>
            {item.title}
          </Link>
        </div>
      );
    });

    if (this.state.loading === true) {
      return <h1>Loading...</h1>;
    }
    if (!this.state.loggedIn) {
      return (
        <main className="myitems">
          <Link className="myitems__link" key="1" to="/login">
            Please login to access your items
          </Link>
        </main>
      );
    } else {
      return (
        <main className="myitems">
          <span className="myitems__title">My Posted Items</span>
          <div className="myitems__list">{makeItems}</div>
        </main>
      );
    }
  }
}
