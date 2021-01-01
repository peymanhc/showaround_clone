import React, { useState } from "react";
import { Container, Row, Toast } from "react-bootstrap";
import DetailInfo from "../DetailInfo/";
import DetailActions from "../DetailActions";

interface Props {
  city: string;
  name: string;
  text: string;
  aboutme: string;
  languages: string;
  activities: boolean;
  review: number;
  star: number;
  phone:number;
  email:string;
}

function Detail(props: Props) {
  const [show, setShow] = useState(false);
  return (
    <Container>
      <Toast
        style={{ position: "absolute", right: 25, top: 75, width: 250 }}
        onClose={() => setShow(false)}
        show={show}
        delay={10000}
        autohide
      >
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
          <strong className="mr-auto">Contact me</strong>
          <small>{props.name}</small>
        </Toast.Header>
        <Toast.Body className="d-flex flex-column">
          <small>
            <b>Email :</b> {props.email}
          </small>
          <small>
            <b>Phone Number :</b> {props.phone}
          </small>
        </Toast.Body>
      </Toast>
      <Row>
        <DetailInfo
          city={props.city}
          name={props.name}
          text={props.text}
          aboutme={props.aboutme}
          languages={props.languages}
          activities={props.activities}
        />
        <DetailActions
          name={props.name}
          city={props.city}
          review={props.review}
          star={props.star}
          toast={() => setShow(true)}
        />
      </Row>
    </Container>
  );
}

export default Detail;
