import React from "react";
import { Row } from "react-bootstrap";
import styles from "./style.module.scss";
import Cardtext from "../cardtext/Cardtext";

interface Props{
  text:string
}

const DetailProfile = (props:Props) => {
  return (
    <div className={styles.Card}>
      <Row>
        <div className={styles.cardDetail}>
          <Cardtext>
            {props.text}
          </Cardtext>
        </div>
      </Row>
    </div>
  );
};

export default DetailProfile;
