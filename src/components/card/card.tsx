import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import styles from "./card.module.scss";

import { Link } from "react-router-dom";
import * as Routes from "../../routes";

import Cardimg from "../cardimg";
import CardName from "../cardName";
import Cardtext from "../cardtext";
import Cardcity from "../cardcity";
import Cardprice from "../cardprice";
import Cardreviews from "../cardreviews";
import Cardrate from "../cardrate";
import Spinner from "../Spinner/Spinner";

interface Props {
  loadmore?: any;
  data?: any;
  cards?: any;
  errorcards?: any;
  loadcards?: any;
}

const Card = (props: Props) => {
  return (
    <Container style={{ maxWidth: "1200px", marginTop: "80px" }}>
      <h3 className={styles.Header}>
        Find your local tour guide with Showaround
      </h3>
      <div className={styles.cards}>
        {props.loadcards ? (
          <Spinner />
        ) : props.errorcards !== null ? (
          <h6 className="text-center mb-5">ERROR...</h6>
        ) : (
          <Row className={styles.cardsstyles}>
            {props.cards
              ?.slice(0, props.data)
              .map(function (item: any, i: any) {
                return (
                  <Col key={i} sm={6}>
                    <div className={styles.Card}>
                      <Link to={Routes.CardDetail + item.id}>
                        <Row className="h-100">
                          <Cardimg image={item.image[0]} />
                          <div className={styles.cardDetail}>
                            <div className={styles.index}>
                              <CardName>{item.name}</CardName>
                              <Cardcity>{item.city}</Cardcity>
                              <Cardprice>{item.price}</Cardprice>
                            </div>
                            <Cardtext>{item.text}</Cardtext>
                            <div>
                              <Row className={styles.review}>
                                <Cardreviews>{item.review}</Cardreviews>
                                <Cardrate>
                                  {" "}
                                  {"★".repeat(Math.round(item.star)) +
                                    "☆".repeat(5 - Math.round(item.star))}
                                </Cardrate>
                              </Row>
                            </div>
                          </div>
                        </Row>
                      </Link>
                    </div>
                  </Col>
                );
              })}
          </Row>
        )}
      </div>
      <Row>
        <button onClick={props.loadmore} className={styles.showmorebtn}>
          Show more
        </button>
      </Row>
    </Container>
  );
};
export default Card;
