import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Card } from "react-bootstrap";
const useStyles = makeStyles({
  card: {
    marginBottom: 50,
    boxShadow: "0px 2px 5px 0px rgba(0,0,0,0.2)",
  },
  cardimg: {
    height: 350,
  },
  cardtitle: {
    fontSize: 30,
    fontWeight: "bolder",
  },
  cardsubtitle: {
    alignItems: "center",
    display: "flex",
    margin: "10px 0",
    fontSize: 14,
    fontWeight: 800,
    paddingBottom: 20,
    borderBottom: "1px solid rgba(0,0,0,0.1)",
  },
  subtitle: {
    margin: "0 30px",
    color: "gray",
    fontSize: 12,
    fontWeight: 200,
  },
  cardtext: {
    fontSize: 17,
    paddingBottom: 20,
    color: "rgba(0,0,0,0.5)",
    borderBottom: "1px solid rgba(0,0,0,0.1)",
  },
  cardlink: {
    borderRadius: 5,
    width: 120,
    padding: "10px",
    margin: "0 10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    color: "white",
  },
});

interface Props {
  img: string;
  title: string;
  text: string;
  telegram: string;
  instagram: string;
}

const Blogpost = (props: Props) => {
  const styles = useStyles();
  return (
    <Card className={styles.card}>
      <Card.Img className={styles.cardimg} variant="top" src={props.img} />
      <Card.Body>
        <Card.Title className={styles.cardtitle}>{props.title}</Card.Title>
        <Card.Subtitle className={styles.cardsubtitle}>
          <p className="mb-0"> Showaround</p>
          <p className={styles.subtitle}>
            <i className="fa fa-folder-open"></i> staycation,
          </p>
          <i className="fa fa-envelope text-muted" aria-hidden="true"></i>
        </Card.Subtitle>
        <Card.Text className={styles.cardtext}>{props.text}</Card.Text>
        <div className="d-flex">
          <Card.Link
            style={{ background: "#02c9ff" }}
            className={styles.cardlink}
            href={props.telegram}
          >
            <i className="fa fa-telegram"></i>
            <p className="mb-0">Telegram</p>
          </Card.Link>
          <Card.Link
            style={{ background: "#d61566" }}
            className={styles.cardlink}
            href={props.instagram}
          >
            <i className="fa fa-instagram "></i>
            <p className="mb-0">instagram</p>
          </Card.Link>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Blogpost;
