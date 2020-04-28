import React, { Component } from "react";
import axios from "axios";

export class NewItem extends Component {
  state = { loading: true, user: {}, items: [], item: {} };

  componentDidMount() {
    let user = localStorage.getItem("user");
    let userParsed = JSON.parse(user)[0];
    this.setState({ user: userParsed });
  }

  render() {
    const createNewItem = (item) => {
      axios.post("/items", {
        ownedBy: item.ownedBy,
        title: item.title,
        description: item.description,
        area: item.area,
      });
    };

    const newItem = (event) => {
      event.preventDefault();
      let item = {
        ownedBy: this.state.user.username,
        title: event.target.title.value,
        description: event.target.description.value,
        area: event.target.area.value,
      };
      if (this.state.user.id) {
        createNewItem(item);
        document.querySelector(".newitem__form").reset();
      } else {
        return window.alert(
          "Please log into your Waste Not account to create this new post."
        );
      }
    };

    return (
      <div className="newitem">
        <form className="newitem__form" action="submit" onSubmit={newItem}>
          <span className="newitem__title">Create a new post</span>

          <div className="newitem__input">
            <h3 className="newitem__label">POST TITLE</h3>
            <input
              className="newitem__post-title"
              placeholder="ex: Groceries help please!"
              name="title"
              required
            ></input>
          </div>

          <div className="newitem__input">
            <h3 className="newitem__label">TEXT OF YOUR POST</h3>
            <textarea
              className="newitem__text"
              type="textarea"
              placeholder="ex: Can someone pick up my order from Safeway?"
              name="description"
              required
            ></textarea>
          </div>

          <div className="newitem__input newitem__input--area">
            <h3 className="newitem__label">STORE</h3>
            <span className="newitem__explain">
              Google widget will go here.
            </span>
          </div>

          <button type="submit" className="newitem__submit-button">
            Post your item
          </button>
        </form>
      </div>
    );
  }
}

export default NewItem;
