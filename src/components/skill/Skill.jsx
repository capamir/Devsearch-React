import React from "react";
import "./skill.css";

function Skill({ skill }) {
  return (
    <div className="devSkill">
      <h4 className="devSkill__title">{skill.title}</h4>
      <p className="devSkill__info">{skill.info}</p>
    </div>
  );
}

export default Skill;
