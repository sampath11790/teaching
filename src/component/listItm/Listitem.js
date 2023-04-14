import React from "react";
import Button from "../button/button";
import Listeachitem from "./listeachitem";

// const Listitem = (props) => {
//   return (
//     <ul>
//       {props.userdata.map((each) => {
//         return (
//           <li key={each.id}>
//             <p>{each.name}</p>
//             <p>{each.place}</p>
//             <img src={each.url} height="100px" width="100px" />
//           </li>
//         );
//       })}
//     </ul>
//   );
// };

// export default Listitem;
const Listitem = (props) => {
  return (
    <ul>
      {props.userdata.map((each) => {
        return <Listeachitem key={each.id} item={each}></Listeachitem>;
      })}
      {props.userdata.map((each) => {
        return <Button myname={each.name} key={each.id}></Button>;
      })}
    </ul>
  );
};

export default Listitem;
