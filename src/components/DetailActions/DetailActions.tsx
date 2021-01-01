import React from "react";
import { Col } from "react-bootstrap";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
import * as Routes from "../../routes";

interface Props {
  name?: string;
  city?: string;
  review?: number;
  star?: any;
  toast:any
}
const DetailActions = (props: Props) => {
  return (
    <Col md={3}>
      <div className={styles.profileactions}>
        <div className={styles.stars}>
          {"★".repeat(Math.round(props.star)) +
            "☆".repeat(5 - Math.round(props.star))}
          <h5>
            Reviews <strong>{props.review}</strong>
          </h5>
        </div>
        <div className={styles.Createtrip}>
          <small>
            Create a trip to <strong>{props.city}</strong> and get offers from
            locals
          </small>
          <Link to={Routes.CreateTrip}>
            <button> Create A Trip </button>
          </Link>
          <span>or</span>
          <small>
            Contact With <strong>{props.name}</strong> and get him
          </small>
          <button onClick={props.toast} className="bg-transparent text-primary"> Contact</button>
          <span>or</span>
          <small>
            Contact With <strong>{props.name}</strong> on his/her pages
          </small>
          <div className={styles.pages}>
            <i className={`fa fa-telegram ${styles.tel}`}></i>
            <i className={`fa fa-instagram ${styles.insta}`}></i>
            <i className={`fa fa-twitter ${styles.twitter}`}></i>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default DetailActions;
