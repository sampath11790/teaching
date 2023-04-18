import React, { Fragment } from "react";

// const Button = (data) => {

//   let myval = data.myname ? data.myname : "submit";
//   return (
//     <Fragment>
//       {/* <button>{data.myname ? data.myname : "submit"}</button> */}
//       <button>{myval}</button>
//     </Fragment>
//   );
// };

// export default Button;
//porps.
// const Button = (props) => {
//   let myval = props.myname ? props.myname : "submit";
//   return (
//     <Fragment>
//       {/* <button>{props.myname ? props.myname : "submit"}</button> */}
//       <button>{myval}</button>
//     </Fragment>
//   );
// };

// export default Button;

const Button = ({ myname }) => {
  let myval = myname ? myname : "submit";

  return (
    <Fragment>
      {/* <button>{myname ?.myname : "submit"}</button> */}

      <button>{myval}</button>
    </Fragment>
  );
};

export default Button;
