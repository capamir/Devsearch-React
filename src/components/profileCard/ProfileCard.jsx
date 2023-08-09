import React from "react";
import { Link } from "react-router-dom";
import { TagMin as Tag } from "../index";
import "./profileCard.css";

function ProfileCard({ profile }) {
  return (
    <div className="column card">
      <div className="dev">
        <Link to={`/profile/${profile.id}`} className="card__body">
          <div className="dev__profile">
            <img className="avatar avatar--md" src={profile.image} alt="" />
            <div className="dev__meta">
              <h3>{profile.name}</h3>
              <h5>{profile.intro}</h5>
            </div>
          </div>
          <p className="dev__info">{profile.description}</p>
          <div className="dev__skills">
            {profile.tags.map((tag) => (
              <Tag key={tag.id} tagName={tag.name} />
            ))}
          </div>
        </Link>
      </div>
    </div>
  );
}

export default ProfileCard;
