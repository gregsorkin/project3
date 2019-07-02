import React from "react";
import "./index.css";

function Sidebar({name, image}) {
  return (
    <div>
        <img alt={name} src={image} />
        {name}
    </div>
  )}

export default Sidebar;