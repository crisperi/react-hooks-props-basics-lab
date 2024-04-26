import React from "react";
import Links from "./Links";
//added props in about 
function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>{props.bio}</p>
      
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />

      {/* add your <Links /> component here */}
    <Links github = {props.github} linkedin = {props.linkedin}/>
    </div>
  );
}

export default About;
