import React, { ReactElement } from "react";
import { Col, Accordion, Card } from "react-bootstrap";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  index: {
    marginTop: "3em",
    padding: "20px",
    width: "300px",
    minHeight: "500px",
    background: "white",
    border: "1px solid #ced1cd",
  },
  infotitles: {
    fontSize: "15px",
    fontWeight: 700,
    color: "gray",
  },
  oninfoLinks: {
    fontSize: "14px",
    marginTop: "1em",
    display: "block",
  },
  textinfo: {
    fontSize: "12px ",
    color: "gray",
  },
});

function SettingsInfo(): ReactElement {
  const classes = useStyles();
  return (
    <Col md={3}>
      <div className={classes.index}>
        <h2 className={classes.infotitles}>More info</h2>
        <a className={classes.oninfoLinks} href="#a">
          About IranTour
        </a>
        <a className={classes.oninfoLinks} href="#b">
          Advice For a Local
        </a>
        <a className={classes.oninfoLinks} href="#a">
          Booking Advice
        </a>
        <hr />
        <h2 className={classes.infotitles}>Need assistance?</h2>
        <p className={classes.textinfo}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore natus
          quam doloribus consequatur repellendus. Distinctio numquam quasi vero
          explic
        </p>
        <hr />
        <Accordion>
          <Card>
            <Accordion.Toggle
              className="border-0 bg-white"
              as={Card.Header}
              eventKey="0"
            >
              Privacy & Account Settings
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <a href="#ChangePass" className={classes.oninfoLinks}>
                  Change Password
                </a>
                <a href="#resetPass" className={classes.oninfoLinks}>
                  reset Password
                </a>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
        <hr />
        <p className={classes.textinfo}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore natus
          quam doloribus consequatur repellendus. Distinctio numquam quasi vero
          explic
        </p>
      </div>
    </Col>
  );
}

export default SettingsInfo;
