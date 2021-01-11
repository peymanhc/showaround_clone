import React from "react";
import { Container, Col, Row } from "react-bootstrap";

import styles from "./styles.module.scss";
import Detailimg from "../DetailImg";
import ProfileContent from "../DetailProfileContent";

interface Props {
  city: string;
  name: string;
  image:string;
  text: string;
  price: number;
}
const Header = (props: Props) => {
  return (
    <div className={styles.header}>
      <Container>
        <Row>
          <Col md={3}>
            <Detailimg image={props.image} />
          </Col>
          <Col md={5}>
            <ProfileContent
              city={props.city}
              name={props.name}
              text={props.text}
              price={props.price}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Header;
