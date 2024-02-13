import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

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
      <Skill skill="React" emoji="✌️" color="#FF5733" />
      <Skill skill="JavaScript" emoji="✌️" color="#87D51D" />
      <Skill skill="AWS & Azure" emoji="💪" color="#1D55D5" />
      <Skill skill="DevOps" emoji="💪" color="#B00BDC" />
      <Skill skill="Terraform" emoji="💪" color="#00A8BF" />
      <Skill skill="HTML+CSS" emoji="👶" color="#DF08CC" />
    </div>
  );
}

function Skill(props) {
  console.log(props);
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
