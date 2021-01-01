import React from "react";
import { Collapse, Container } from "react-bootstrap";
import styles from "./styles.module.scss";

interface Props {
  ReadmoreBtn?: any;
  showtext?: boolean;
}
const Infobox = (props: Props) => {
  return (
    <Container className={styles.infobox}>
      <h3>Aboutus</h3>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
        exercitationem cum esse odio quibusdam, aspernatur, voluptatum magni rem
        debitis eveniet fugit blanditiis voluptate culpa nisi, necessitatibus
        minus. Neque, explicabo asperiores? Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Officiis exercitationem cum esse odio
        quibusdam, aspernatur, voluptatum magni rem debitis eveniet fugit
        blanditiis voluptate culpa nisi, necessitatibus minus. Neque, explicabo
        asperiores?
      </p>
      <p
        style={{ display: props.showtext ? "none" : "block" }}
        onClick={props.ReadmoreBtn}
        className={styles.readmore}
      >
        + Read More
      </p>
      <Collapse in={props.showtext}>
        <div className={styles.text}>
          <span>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores
            ducimus odit fugiat ab fuga beatae velit id repellat quia nulla.
            Quia nam numquam delectus doloribus sequi deleniti ea quos
            reiciendis. Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Aut ab sequi reprehenderit eius repellendus, tempore est
            necessitatibus omnis porro inventore temporibus laudantium officia
            quis cumque illo dolorem asperiores culpa? Nobis? Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Suscipit ab rerum mollitia,
            ipsa porro voluptatibus eveniet aliquid, maxime, sequi eos enim
            sunt. Ea nemo suscipit accusantium hic nisi aliquid perspiciatis.
          </span>
        </div>
      </Collapse>
      <div
        style={{ display: props.showtext ? "none" : "block" }}
        className={styles.gradient}
      ></div>
    </Container>
  );
};

export default Infobox;
