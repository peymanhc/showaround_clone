import React from "react";

import styles from "../card/card.module.scss";

const Cardtext: React.FC = (props) => {
  return (
    <div className={styles.text}>
      <i className="fa fa-quote-left"></i>
      <p className="pr-4">{props.children}</p>
      <i
        style={{ top: "-15px", position: "inherit" }}
        className="text-right fa fa-quote-right"
      ></i>
    </div>
  );
};

export default Cardtext;
