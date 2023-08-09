import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./messageDetail.css";

const tempMessage = {
  id: 1,
  subject: "Working Opportunity for Web Design Company",
  author: "Dennis Ivanov",
  body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, ea? Facere minus vel nam, quas nisi dolore possimus tempora commodi. Praesentium nisi totam quas pariatur culpa nostrum dolore, nemo voluptatem!",
  created: "May 31, 2021, 04:37 PM",
};

function MessageDetail() {
  const [message, setMessage] = useState({});

  useEffect(() => {
    setMessage(tempMessage);
  }, []);
  return (
    <main class="messagePage my-xl">
      <div class="content-box">
        <div class="message">
          <Link to="/inbox" href="inbox.html">
            <i class="im im-angle-left"></i>
          </Link>
          <h2 class="message__subject">{message.subject}</h2>
          <Link to="profile.html" class="message__author">
            {message.author}
          </Link>
          <p class="message__date">{message.created}</p>
          <div class="message__body">{message.body}</div>
        </div>
      </div>
    </main>
  );
}

export default MessageDetail;
