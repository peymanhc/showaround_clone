import React from "react";

const Cardprice: React.FC = (props) => {
  return (
    <h5>
      <small>$</small>
      <strong>{props.children}</strong>/h
    </h5>
  );
};

export default Cardprice;
