import React from "react";
import { Col } from "react-bootstrap";

import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
import * as Routes from "../../routes";

interface Props {
  name?: string;
  city?: string;
  review?: number;
  star?: number;
}

const ProfileActions = (props:Props) => {


  return (
    <Col md={3}>
      <div className={styles.profileactions}>
        <div className={styles.stars}>
          <span className="fa fa-star"></span>
          <span className="fa fa-star"></span>
          <span className="fa fa-star"></span>
          <span className="fa fa-star"></span>
          <span className="fa fa-star"></span>
          <h5>
            Reviews <strong>{props.review}</strong>
          </h5>
        </div>
        <div className={styles.Createtrip}>
          <Link to={Routes.Settings}>
            <button className="mb-3">Edit My Profile</button>
          </Link>
          <small>
            Create a trip to <strong>{props.city}</strong> and get offers from
            locals
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
}

export default ProfileActions;
