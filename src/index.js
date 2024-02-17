import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

const skills = [
  {
    skill: "React",
    level: "advanced",
    color: "#FF5733",
  },
  {
    skill: "JavaScript",
    level: "beginner",
    color: "#87D51D",
  },
  {
    skill: "AWS & Azure",
    level: "advanced",
    color: "#1D55D5",
  },
  {
    skill: "DevOps",
    level: "intermediate",
    color: "#B00BDC",
  },
  {
    skill: "Terraform",
    level: "advanced",
    color: "#00A8BF",
  },
  {
    skill: "CSS",
    level: "beginner",
    color: "#DF08CC",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <img
      className="avatar"
      src="vm-profile-image.jpeg"
      alt="Vikramjeet Multani"
    ></img>
  );
}

function Intro() {
  return (
    <div>
      <h1>Vikramjeet Multani</h1>
      <p>
        Cloud Engineer with Azure and AWS DevOps skills, Currently learning full
        stack web development using React and Java at front and backend. I like
        watching Cricket, Rugby and Formula One.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill
          skill={skill.skill}
          color={skill.color}
          level={skill.level}
          key={skill.skill}
        />
      ))}
    </div>
  );
}

function Skill({ skill, color, level }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>

      <span>
        {level === "beginner" && "👶"}
        {level === "intermediate" && "👍"}
        {level === "advanced" && "💪"}
      </span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
