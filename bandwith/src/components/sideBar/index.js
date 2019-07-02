import React from "react";
import "./index.css";

function Sidebar({name, image}) {
  return (
    <div>
        <div>
        <img className="userPhoto" alt={name} src={image} />
        </div>
        <div>{name}</div>
    </div>
  )}

export default Sidebar;