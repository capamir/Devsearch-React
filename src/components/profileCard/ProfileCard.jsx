import React from "react";
import { Tag } from "../index";
import "./profileCard.css";

function ProfileCard() {
  return (
    <div className="column card">
      <div className="dev">
        <a href="/profile.html" className="card__body">
          <div className="dev__profile">
            <img className="avatar avatar--md" src="images/dennis.jpg" alt="" />
            <div className="dev__meta">
              <h3>Shahriar P. Shuvo</h3>
              <h5>FullStack Web Designer & Developer</h5>
            </div>
          </div>
          <p className="dev__info">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Cupiditate, ducimus inventore! Sunt, veniam veritatis? Veritatis
            placeat, deleniti iure tempore veniam perspiciatis, soluta
            cupiditate animi, exercitationem molestias nam doloremque architecto
            odit.
          </p>
          <div className="dev__skills">
            <Tag tagName={"JavaScript"} />
            <Tag tagName={"React"} />
            <Tag tagName={"SCSS"} />
            <Tag tagName={"Nodejs"} />
            <Tag tagName={"Express"} />
            <Tag tagName={"GraphQL"} />
          </div>
        </a>
      </div>
    </div>
  );
}

export default ProfileCard;
