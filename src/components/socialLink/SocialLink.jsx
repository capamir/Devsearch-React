import React from "react";
import { Link } from "react-router-dom";
import "./socialLink.css";

function SocialLink() {
  return (
    <li>
      <Link title="Github" to="/" target="_blank">
        <i className="im im-github"></i>
      </Link>
    </li>
  );
}

export default SocialLink;
