import React from "react";
import Button from "../button/button";

const Some = () => {
  return (
    <div>
      <p>some component</p>
      <input type="text" placeholder="enter text here"></input>
      <Button myname="buy" myval="1"></Button>
      <Button></Button>
      <Button></Button>
    </div>
  );
};

export default Some;
