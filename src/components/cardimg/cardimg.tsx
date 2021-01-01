import React from "react";
import { Col } from "react-bootstrap";

import styles from "../card/card.module.scss";

interface Props {
  image: string;
}
const Cardimg = (props: Props)  => {
  return (
    <Col>
      <img
        alt="profileimg"
        className={styles.imgCard}
        src={props.image}
      />
    </Col>
  );
};

export default Cardimg;
