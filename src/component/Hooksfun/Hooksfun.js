import React, { useState } from "react";

const Hooksfun = () => {
  // =useState()
  //   let mystate = useState(1);
  //   let [mycurval, setcurvalfun] = mystate;
  //   console.log(mycurvalfun);
  let val = 10;

  console.log("text");

  const clickfun = () => {
    val++;
    // mycurval++;
    // var temp = mycurval + 1;
    // setcurvalfun(temp);
    console.log("hookfun button click", val);
    // console.log("hookfun button click", mycurval);
  };

  return (
    <div>
      <p>{val}</p>
      {/* <p>{mycurval}</p> */}
      <button onClick={clickfun}>click</button>
    </div>
  );
};

export default Hooksfun;
