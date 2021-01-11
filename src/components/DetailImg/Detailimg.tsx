import React from "react";
import styles from "../DetailHeader/styles.module.scss";

interface Props {
  image: any;
}
const Detailimg = (props: Props) => {
  return (
    <div
      data-interval="50000"
      id="carouselExampleIndicators"
      className="carousel slide"
    >
      <ol className="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          className="active"
        ></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className={styles.ProfileImage}>
            <img alt="profile" src={props.image[0]} />
          </div>
        </div>
        {props.image[1] && (
          <div className="carousel-item">
            <div className={styles.ProfileImage}>
              <img alt="profile" src={props.image[1]} />
            </div>
          </div>
        )}
      </div>

      <a
        className={`carousel-control-next ${styles.opacity1} `}
        href="#carouselExampleIndicators"
        data-slide="next"
      >
        <p className={`fa fa-angle-right ${styles.control}`}></p>
      </a>
    </div>
  );
};

export default Detailimg;
