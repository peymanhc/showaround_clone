import React from "react";

import styles from "./Bestleaders.module.scss";
import { Container } from "react-bootstrap";
import BestLeadersCard from "../bestleadersCard";

interface Props {
  bestcard?: any;
  load?: any;
  error?: any;
}

const Bestleaders = (props: Props) => {
  return (
    <Container style={{ maxWidth: "1200px" }}>
      <div className={styles.title}>
        <h3>Best Leaders</h3>
        <small>In the eyes of the people</small>
      </div>
      <BestLeadersCard
        card={props.bestcard}
        load={props.load}
        error={props.error}
      />
    </Container>
  );
};
export default Bestleaders;
