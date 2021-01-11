import React from "react";

const CardName: React.FC = (props) => {
  return (
    <h6>
      <strong>{props.children}</strong>
    </h6>
  );
};

export default CardName;
