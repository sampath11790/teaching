import React from "react";

const Test = ({ mynamedata, parentfun }) => {
  // var a=10
  // mynamedata, parentfun
  function mybuttonclick() {
    console.log(a);
    console.log("yes am button");
    parentfun("nandhu");
  }

  return (
    <>
      <h1>Test component</h1>
      <h3>{mynamedata}</h3>
      <button onClick={mybuttonclick}>send</button>
    </>
  );
};

export default Test;
