import React, { ReactElement } from "react";
import styles from "./styles.module.scss";

function RegisterHead(): ReactElement {
  return (
    <div className={styles.header}>
      <div className={styles.RegisterHead}>
        <h1>Signup as Local</h1>
        <h3>Show travellers around & make extra money</h3>
      </div>
    </div>
  );
}

export default RegisterHead;
