import React, { FunctionComponent } from "react";
import { Container, Col, Row } from "react-bootstrap";
import styles from "./styles.module.scss";

const RegisterBody: FunctionComponent = () => {
  return (
    <Container>
      <div className={styles.index}>
        <Row className={styles.border}>
          <Col md={4}>
            <img alt="register" src={require("../../images/register1.png")} />
          </Col>
          <Col md={8}>
            <div className={styles.text}>
              <h4>Become a Local</h4>
              <p>
                Anyone can do it and that means you! You don't have to be a pro
                to show people around, just be yourself and let your guests
                discover the city you love.
              </p>
            </div>
          </Col>
        </Row>
        <Row dir="rtl" className={styles.border}>
          <Col md={4}>
            <img alt="register" src={require("../../images/register2.png")} />
          </Col>
          <Col md={8}>
            <div className={styles.text}>
              <h4>Choose your price</h4>
              <p>
                You determine how much you want to make and can set your hourly
                rate accordingly. For every hour you’re out exploring, you’ll be
                earning.
              </p>
            </div>
          </Col>
        </Row>
        <Row className={styles.border}>
          <Col md={4}>
            <img alt="register" src={require("../../images/register3.png")} />
          </Col>
          <Col md={8}>
            <div className={styles.text}>
              <h4>Accept interesting offers </h4>
              <p>
                You decide who you want to meet and when. You’re completely in
                charge of your schedule. Get to know interesting people from
                around the world!
              </p>
            </div>
          </Col>
        </Row>
        <Row dir="rtl" className={styles.border}>
          <Col md={4}>
            <img alt="register" src={require("../../images/register4.png")} />
          </Col>
          <Col md={8}>
            <div className={styles.text}>
              <h4>Show around! Earn Money</h4>
              <p>
                Show your guests the best your city has to offer! As your
                reputation improves through ratings and reviews, so will your
                ranking in the search. The higher you’re ranked, the more offers
                you’ll get and the more money you’ll be able to make.
              </p>
            </div>
          </Col>
        </Row>
      </div>
      <div className={styles.Signup}>
        <h3>You don’t have to be an expert</h3>
        <p>
          All you need is a vibrant personality, an intimate knowledge of your
          city and a passion for meeting new people.
        </p>
      </div>
    </Container>
  );
};

export default RegisterBody;
