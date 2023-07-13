import React from "react";
import { Link } from "react-router-dom";
import "./messageDetail.css";

function MessageDetail() {
  return (
    <main class="messagePage my-xl">
      <div class="content-box">
        <div class="message">
          <Link to="backButton" href="inbox.html">
            <i class="im im-angle-left"></i>
          </Link>
          <h2 class="message__subject">
            Working Opportunity for Web Design Company
          </h2>
          <Link to="profile.html" class="message__author">
            Dennis Ivanov
          </Link>
          <p class="message__date">May 31, 2021, 04:37 PM</p>
          <div class="message__body">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
            ea? Facere minus vel nam, quas nisi dolore possimus tempora commodi.
            Praesentium nisi totam quas pariatur culpa nostrum dolore, nemo
            voluptatem!
            <br />
            <br />
            Voluptate dolores veniam ducimus cumque, harum fuga quaerat, culpa
            distinctio voluptas magnam a unde reiciendis similique
            necessitatibus obcaecati voluptatibus deserunt voluptatum numquam
            ullam in ipsum, ea aperiam. Dolorum rerum pariatur quaerat. Debitis
            tempora aliquid libero alias aperiam illo fuga ipsum magni quia.
          </div>
        </div>
      </div>
    </main>
  );
}

export default MessageDetail;
