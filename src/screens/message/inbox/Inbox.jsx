import React from "react";
import { Message } from "../../../components";
import "./inbox.css";

const messageData = [
  {
    author: "Dennis Ivanov",
    subject: "Working Opportunity for Web Design Company",
    date: "May 31, 2021, 04:37 PM",
    is_read: false,
  },
  {
    author: "Md. Shahriar Parvez",
    subject: "Up for a Freelancing Project?",
    date: "May 30, 2021, 07:47 PM",
    is_read: false,
  },
  {
    author: "Sulamita Ivanov",
    subject: "Another Opportunity for Side Income",
    date: "May 29, 2021, 09:45 AM",
    is_read: true,
  },
];

function Inbox() {
  return (
    <main class="inbox my-xl">
      <div class="content-box">
        <h3 class="inbox__title">
          New Messages(<span>2</span>)
        </h3>
        <ul class="messages">
          {messageData.map((message) => (
            <Message message={message} />
          ))}
        </ul>
      </div>
    </main>
  );
}

export default Inbox;
