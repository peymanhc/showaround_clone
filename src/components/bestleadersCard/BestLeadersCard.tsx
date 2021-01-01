import React from "react";
import { Col, Row } from "react-bootstrap";

import styles from "../bestleaders/Bestleaders.module.scss";

import LeaderName from "../bestLeadersName/index";
import LeaderPrice from "../bestLeadersPrice/index";
import Leaderimg from "../bestleadersimg/index";
import Leadercity from "../bestleaderCity/index";
import LeaderTxt from "../bestleaderTxt/index";
import Spinner from "../Spinner/Spinner";

interface Props {
  card?: any;
  load?: any;
  error?: any;
}

const BestLeadersCard = (props: Props) => {
  return (
    <div>
      <Row>
        {props.load ? (
          <Spinner />
        ) : props.error !== null ? (
          <h6 className="text-center mb-5">ERROR...</h6>
        ) : (
          <>
            {props.card.map(function (item: any, i: any) {
              return (
                <Col key={i} sm={4}>
                  <div className={styles.card}>
                    <div className={styles.bgimg}></div>
                    <div className={styles.cardimg}>
                      <Leaderimg image={item.image} />
                      <LeaderPrice>{item.price}</LeaderPrice>
                      <div className={styles.Name}>
                        <LeaderName>{item.name}</LeaderName>
                        <Leadercity>{item.city}</Leadercity>
                      </div>
                    </div>
                    <div className={styles.text}>
                      <LeaderTxt>{item.text}</LeaderTxt>
                    </div>
                    <p className={styles.phonenumber}>{item.phoneNumber}</p>
                  </div>
                </Col>
              );
            })}
          </>
        )}
      </Row>
    </div>
  );
};
export default BestLeadersCard;
