import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import Links from "./Links";
// pass this data down as props to the child component(s) that need it!
import user from "../data/user";
console.log(user);
let github =user.links.github;
 let linkedin=user.links.linkedin;

 let name =user.name;
 let city=user.city;
let color =user.color;
 let bio = user.bio;

function App(props) {

  return (
    <div>
      <NavBar {...user} />
      <Home name = {name} city = {city}  color = {color}/>
      <About bio = {bio} text ="Links" github = {github}  linkedin = {linkedin}/>
    </div>
  );
}

export default App;
