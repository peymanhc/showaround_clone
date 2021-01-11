import React from "react";
import styles from "./styles.module.scss";

interface Props {
  city: string;
  name: string;
  text: string;
  price: number;
}
const ProfileContent = (props: Props) => {
  return (
    <div className={styles.Profile_Content}>
      <div>
        <h5>{props.name}</h5>
        <p>{props.city}</p>
        <h6>
          <small>$</small>
          <strong>{props.price}</strong>/h
        </h6>
        <div className={styles.text}>
          <i className="fa fa-quote-left"></i>
          <p className="pr-4">{props.text}</p>
          <i className="text-right fa fa-quote-right"></i>
        </div>
      </div>
    </div>
  );
};

export default ProfileContent;
