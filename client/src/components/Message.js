import React, { Component } from "react";
import axios from "axios";
import Messages from "./Messages";

export default class Message extends Component {
  state = {
    loading: false,
    user: this.props.user,
    item: this.props.item,
    conversations: this.props.item.conversations
  };

  postMessage = e => {
    e.preventDefault();
    this.setState({ loading: true });
    let newMessage = {
      sentBy: this.state.user.username,
      item: this.state.item.id,
      itemOwner: this.state.item.ownedBy,
      text: e.target.text.value
    };
    console.log(newMessage);
    axios({
      method: "put",
      url: `http://localhost:5000/items/${this.state.item.id}`,
      headers: { "Access-Control-Allow-Origin": "*" },
      data: newMessage
    }).then(res => {
      console.log(res.data);
      this.setState({ conversations: res.data, loading: false });
    });
    document.querySelector(".message__form").reset();
  };

  render() {
    return (
      <div>
        <div className="message__input">
          <form
            action="submit"
            className="message__form"
            onSubmit={this.postMessage}
          >
            <h3 className="message__label">
              Type your message to the post's author here
            </h3>
            <textarea
              className="message__text"
              type="textarea"
              name="text"
              required
            ></textarea>
            <button type="submit" className="message__submit">
              Send
            </button>
          </form>
        </div>
        <div className="message__output">
          <Messages
            user={this.state.user}
            conversations={this.state.conversations}
          />
        </div>
      </div>
    );
  }
}
