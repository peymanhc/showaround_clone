import React from "react";
import styles from "./styles.module.scss";
import Loadinglogo from "../../images/loading.png";
interface Props {}

const Loading = (props: Props) => {
  return (
    <div className={styles.root}>
      <img alt="loading" width="350px" src={Loadinglogo} />
      <div className={styles.loader}>
        <svg className={styles.spinner} viewBox="25 25 50 50">
          <circle cx="50" cy="50" r="20" />
        </svg>
      </div>
    </div>
  );
};

export default Loading;
