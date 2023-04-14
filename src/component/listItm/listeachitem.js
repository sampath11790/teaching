import React from "react";

const Listeachitem = (props) => {
  return (
    <li key={props.item.id}>
      <p>{props.item.name}</p>
      <p>{props.item.place}</p>
      <img src={props.item.url} height="100px" width="100px" />
    </li>
  );
};
export default Listeachitem;
