import React from "react";
import logo from "./../../images/logos/bandwith_logo_tape-01.png"
import "./index.css";

function Headbar(props) {
  return (
    <div>{props.children}          <img alt="logo" src={logo} />
    </div>
  )}

export default Headbar;