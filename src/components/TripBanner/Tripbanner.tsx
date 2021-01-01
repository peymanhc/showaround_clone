import React from "react";

import styles from "./Tripbanner.module.scss";
import { Row, Col, Container } from "react-bootstrap";
import * as Routes from "../../routes";
import { Link } from "react-router-dom";

const Tripbanner: React.FC = (props) => {
  return (
    <div className={styles.banner}>
      <div className={styles.title}>
        <span>Savetime :</span>
        Create a trip & get offers from locals
        <Container className="mt-4">
          <Row>
            <Col>
              <div>
                <p style={{ background: "#a4d3a7" }} className={styles.icon}>
                  1
                </p>
                <p className={styles.bannerstate}>Create a trip</p>
              </div>
            </Col>
            <Col>
              <div>
                <p style={{ background: "#fccd52" }} className={styles.icon}>
                  2
                </p>
                <p className={styles.bannerstate}>Get offers from locals </p>
              </div>
            </Col>
            <Col>
              <div>
                <p style={{ background: "#dd513b" }} className={styles.icon}>
                  3
                </p>
                <p className={styles.bannerstate}>Pick the one you like </p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <Link to={Routes.CreateTrip}>
                <button className="btn btn-primary">Create a Trip</button>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Tripbanner;
