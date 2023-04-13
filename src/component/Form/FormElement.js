import React, { useState } from "react";
import Button from "../button/button";

const FormElement = () => {
  let [myname, setmyname] = useState("");
  let [myemail, setemail] = useState("");
  function mysubmit(e) {
    e.preventDefault();
    // console.log(e.target.name);

    console.log(myname, myemail);
    setmyname("");
    setemail("");
    console.log("submit function");
  }

  function mychange1(e) {
    // console.log(e.target.value);

    setmyname(e.target.value);
  }

  function mychange2(e) {
    // console.log(e.target.value);
    setemail(e.target.value);
  }
  return (
    <div>
      <p>{myname}</p>
      <p>{myemail}</p>
      <form onSubmit={mysubmit}>
        <input
          type="text"
          name="myname"
          placeholder="myname"
          onChange={mychange1}
          value={myname}
        />
        <br></br>
        <input
          type="email"
          placeholder="entermail"
          onChange={mychange2}
          value={myemail}
        />
        <button>submit</button>
        {/* <Button></Button> <br></br> */}
      </form>
    </div>
  );
};

export default FormElement;

// form.add("onclic",()=>{

// })
