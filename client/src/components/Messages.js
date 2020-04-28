import React, { Component } from "react";

export class Messages extends Component {
  state = {
    user: this.props.user,
    conversations: this.props.conversations
  };

  render() {
    const username = this.state.user.username;
    const messages = this.state.conversations.filter(
      message => message.sentBy === username
    );
    const showMessages = messages.map(message => {
      if (message.sentBy === username) {
        const timestamp = message.timestamp;
        const dateObj = new Date(timestamp);
        const date = dateObj.getDate();
        const month = dateObj.getMonth() + 1;
        const year = dateObj.getFullYear();
        console.log(date, month, year);
        return (
          <div className="message__container" key={message.id}>
            <div className="message__labels">
              <span className="message__sender">Sent by: {username}</span>
              <span className="message__sent-date">
                Date sent: {year}-{month}-{date}
              </span>
            </div>

            <p className="message__sent-text">{message.text}</p>
          </div>
        );
      }
    });

    return <div>{showMessages}</div>;
  }
}

export default Messages;
