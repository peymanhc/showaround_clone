import React, { useState, FunctionComponent } from "react";
import { Container, Col, Row, Carousel } from "react-bootstrap";

import styles from "./header.module.scss";

interface Props {
  searchValue?: string;
}
const Header: FunctionComponent<Props> = ({ searchValue = "" }) => {
  const [Search, setSearch] = useState(searchValue);
  const [righticon] = useState(<span className={`fa fa-angle-right ${styles.arrowicons}`}></span>);
  const [lefticon] = useState(<span className={`fa fa-angle-left ${styles.arrowicons}`}></span>);

  return (
    <div className={styles.imageHeader}>
      <section className={styles.homehead}>
        <Container>
          <Row>
            <Col md={8} className={styles.titles}>
              <p className={styles.HeadTitle}>
                <strong>FIND A LOCAL</strong>
              </p>
              <p className={styles.HeadSub}>to show you around</p>
              <form className={styles.SearchField}>
                <button className={styles.searchbtn} type="button">
                  <i className="fa fa-search"></i>
                </button>
                <input
                  value={Search}
                  onChange={(e) => setSearch(e.target.value)}
                  type="text"
                  placeholder="Where Next?"
                />
                <button className={styles.SearchField_button} type="submit">
                  <i className="Icon Icon-search"></i>
                  <span>BROWSE LOCALS</span>
                </button>
                <p className={styles.topDestinations}>
                  <a href="#Top Destinations:">
                    <strong>Top Destinations:</strong>
                  </a>
                  <a href="#paris">Paris</a>,<a href="#istanbul">İstanbul</a>,
                  <a href="#barcelona">Barcelona</a>,
                  <a href="#tbilisi">Tbilisi</a>,<a href="#kyiv">Kyiv</a>,
                  <a href="#lisbon">Lisbon</a>
                </p>
              </form>
            </Col>
            <Col md={4} className={styles.howworkcol}>
              <h2 className={styles.rightHead}>
                <span className="ml-5" >
                  <i className="fa fa-youtube-play pr-3"></i>How it works
                </span>
                <Carousel nextIcon ={righticon} prevIcon={lefticon} interval={5000} className={styles.carousel}>
                  <Carousel.Item>
                    <img
                      src={require("../../images/arrow1.png")}
                      alt="Third slide"
                    />
                    <h3>Experience</h3>
                    <p>Witness the city through the eyes of a local.</p>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      src={require("../../images/arrow2.png")}
                      alt="Third slide"
                    />
                    <h3>Find</h3>
                    <p>Browse locals. Find the one you like.</p>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      src={require("../../images/arrow3.png")}
                      alt="Third slide"
                    />
                    <h3>Arrange</h3>
                    <p>Plan & discuss activities before you meet.</p>
                  </Carousel.Item>
                </Carousel>
              </h2>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Header;
