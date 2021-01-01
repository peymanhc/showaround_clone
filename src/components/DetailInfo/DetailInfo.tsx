import React from "react";
import { Row, Col } from "react-bootstrap";
import styles from "./styles.module.scss";

interface Props {
  city: string;
  name: string;
  text: string;
  aboutme: string;
  languages: string;
  activities: any;
}

const DetailInfo = (props: Props) => {
  return (
    <Col md={9}>
      <div className={`mt-4 ${styles.actions}`}>
        <Row>
          <h2>
            Explore <strong>{props.city}</strong>,<strong>{props.name}</strong>
          </h2>
        </Row>
        <Row className={`mt-4 ${styles.b_bottom}`}>
          <Col md={4}>
            <strong>I will show you</strong>
          </Col>
          <Col md={8}>
            <p>{props.text}</p>
          </Col>
        </Row>
        <Row className={`mt-4 ${styles.b_bottom}`}>
          <Col md={4}>
            <strong>About me</strong>
          </Col>
          <Col md={8}>
            <p>{props.aboutme}</p>
          </Col>
        </Row>
        <Row className={`mt-4 ${styles.b_bottom}`}>
          <Col md={4}>
            <strong>Languages</strong>
          </Col>
          <Col md={8}>
            <p>{props.languages}</p>
          </Col>
        </Row>
        <Row className={`mt-4 `}>
          <Col md={4}>
            <strong>Activities</strong>
          </Col>
          <Col md={8}>
            <div className={styles.activities}>
              <ul>
                <li>
                  <ul>
                    {props.activities.Translation ? (
                      <li>
                        <span className="fa fa-language"></span> Translation &
                      </li>
                    ) : (
                      <li></li>
                    )}
                    {props.activities.Shopping ? (
                      <li>
                        <span className="fa fa-shopping-cart"></span> Shopping
                      </li>
                    ) : (
                      <li></li>
                    )}
                    {props.activities.Food ? (
                      <li>
                        <span className="fa  fa-cutlery"></span> Food &
                        Restaurants
                      </li>
                    ) : (
                      <li></li>
                    )}
                  </ul>
                </li>
                <li>
                  <ul>
                    {props.activities.Sports ? (
                      <li>
                        <span className="fa fa-futbol-o"></span> Sports &
                      </li>
                    ) : (
                      <li></li>
                    )}
                    {props.activities.Pick_up ? (
                      <li>
                        <span className="fa fa-bus"></span> Pick up & Driving
                      </li>
                    ) : (
                      <li></li>
                    )}
                    {props.activities.Art ? (
                      <li>
                        <span className="fa fa-fort-awesome"></span> Art &
                      </li>
                    ) : (
                      <li></li>
                    )}
                  </ul>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </div>
    </Col>
  );
};

export default DetailInfo;
