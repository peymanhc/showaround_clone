import React from "react";
import { Col } from "react-bootstrap";

const CardReviews: React.FC = (props) => {
  return (
    <Col>
      <p className="mb-1">Reviews</p>
      <p>{props.children}</p>
    </Col>
  );
};

export default CardReviews;
