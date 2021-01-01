import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import styles from "./Footer.module.scss";
import FooterLink from "./footerlinks";

interface Props {
  title: string;
  links: Array<string>;
}

const footeritem: Array<Props> = [
  {
    title: "Link",
    links: ["Link1", "Link2", "Opps", "Peymanhc"],
  },
  {
    title: "Link",
    links: ["Link1", "Link2", "hum", "Peymanhc"],
  },
  {
    title: "test",
    links: ["test", "testss", "han", "Peymanhc"],
  },
  {
    title: "test2",
    links: ["this", "that", "then", "Peymanhc"],
  },
];

const Footer: React.FC = () => {
  return (
    <div className={styles.index}>
      <Container className="text-center text-md-left" fluid>
        <footer className="page-footer font-small blue p-4 container ">
          <Row>
            <Col md="3">
              <h5 className="text-uppercase">MyTour</h5>
              <p>
                Here you can use rows and columns to organize your footer
                content.
              </p>
            </Col>
            {footeritem.map((item: any, i: number) => {
              return (
                <Col key={i} md="2">
                  <h5 className="text-uppercase white">{item.title}</h5>
                  <FooterLink>{item.links[0]}</FooterLink>
                  <FooterLink>{item.links[1]}</FooterLink>
                  <FooterLink>{item.links[2]}</FooterLink>
                  <FooterLink>{item.links[3]}</FooterLink>
                </Col>
              );
            })}
          </Row>
        </footer>
      </Container>
    </div>
  );
};
export default Footer;
