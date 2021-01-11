import React from "react";
import { Col } from "react-bootstrap";

const CardRate = (props: any) => {
  return (
    <Col>
      <p className="mb-1">Rating</p>
      <div style={{ color: "#f38630", fontSize:"16px" }}>{props.children}</div>
    </Col>
  );
};

export default CardRate;
