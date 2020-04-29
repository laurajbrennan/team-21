import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export class Browse extends Component {
  state = { loading: true, user: {}, items: [], area: {}, filteredItems: [] };

  componentDidMount() {
    axios.get("/items").then((response) => {
      console.log(response);
      this.setState({
        loading: false,
        user: localStorage.getItem("user"),
        items: response.data,
        filteredItems: response.data,
      });
      console.log(this.state.filteredItems);
    });
  }

  render() {
    const buildItems = this.state.filteredItems.map((item) => {
      return (
        <div className="item" key={item.id}>
          <Link to={`/browse/${item.id}`} id={item.id}>
            <div className="item__text">
              <div className="item__container">
                <span className="item__title">{item.title}</span>
              </div>
              <p className="item__area">{item.area}</p>
            </div>
          </Link>
        </div>
      );
    });

    if (this.state.loading) {
      return <h1>Loading...</h1>;
    } else {
      return <section className="browse">{buildItems}</section>;
    }
  }
}

export default Browse;
