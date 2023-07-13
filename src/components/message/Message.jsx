import React from "react";
import { Link } from "react-router-dom";
import "./message.css";

function Message({ message }) {
  return (
    <li class={`message ${message.is_read ? "" : "message--unread"}`}>
      <Link to="/message">
        <span class="message__author">{message.author}</span>
        <span class="message__subject">{message.subject}</span>
        <span class="message__date">{message.date}</span>
      </Link>
    </li>
  );
}

export default Message;
