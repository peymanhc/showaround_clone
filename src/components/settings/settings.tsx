import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Col, Accordion, Card } from "react-bootstrap";

import { useDispatch } from "react-redux";

import { loadingdata } from "../../store/actions/profile";
import { useForm } from "react-hook-form";
import Btns from "../settingbtns/btn";

const useStyles = makeStyles({
  headtxt: {
    fontSize: "22px",
    fontWeight: 800,
  },
  subtxt: {
    marginTop: "20px",
    marginBottom: "20px",
    fontSize: "18px",
    color: "gray",
  },
  Card: {
    border: "1px solid #ced1cd",
    color: "black !important",
  },
  Collapsebody: {
    borderTop: "1px solid #ced1cd",
    background: "#f4f5f5",
  },
  careticon: {
    fontSize: "20px",
    float: "right",
    marginTop: "10px",
  },
});
function Settings(): React.ReactElement {
  const classes = useStyles();
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const SubmitBtn = (data: any) => {
    dispatch(
      loadingdata(
        data.token,
        data.email,
        data.password,
        data.name,
        data.location,
        data.about,
        data.motto,
        data.phone,
        data.price
      )
    );
  };
  return (
    <Col md={8}>
      <h3 className={classes.headtxt}>Profile Settings</h3>
      <h4 className={classes.subtxt}>General information</h4>
      <Accordion className="mt-4" defaultActiveKey="0">
        <Card className={classes.Card}>
          <Accordion.Toggle
            className="text-dark font-weight-bold bg-white"
            as={Card.Header}
            eventKey="0"
          >
            Name
            <small className="ml-4 text-black-50">Name</small>
            <i className={`fa fa-caret-down ${classes.careticon}`}></i>
          </Accordion.Toggle>
          <Accordion.Collapse className={classes.Collapsebody} eventKey="0">
            <Card.Body>
              <small>Use your real name</small>
              <form>
                <input
                  name="name"
                  id="name"
                  ref={register()}
                  className="mt-2"
                  placeholder="Name"
                />
                <Btns clicked={handleSubmit(SubmitBtn)} />
              </form>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card className={classes.Card}>
          <Accordion.Toggle
            className="text-dark font-weight-bold bg-white"
            as={Card.Header}
            eventKey="1"
          >
            location
            <small className="ml-4 text-black-50">Where are you from </small>
            <i className={`fa fa-caret-down ${classes.careticon}`}></i>
          </Accordion.Toggle>
          <Accordion.Collapse className={classes.Collapsebody} eventKey="1">
            <Card.Body>
              <small>Enter You Location</small>
              <form>
                <input
                  name="location"
                  id="location"
                  ref={register()}
                  className="mt-2"
                  placeholder="Your City"
                />
                <Btns clicked={handleSubmit(SubmitBtn)} />
              </form>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card className={classes.Card}>
          <Accordion.Toggle
            className="text-dark font-weight-bold bg-white"
            as={Card.Header}
            eventKey="2"
          >
            Profile images
            <small className="ml-4 text-black-50">Your Image</small>
            <i className={`fa fa-caret-down ${classes.careticon}`}></i>
          </Accordion.Toggle>
          <Accordion.Collapse className={classes.Collapsebody} eventKey="2">
            <Card.Body>Upload your images</Card.Body>
          </Accordion.Collapse>
        </Card>
        <h4 className={classes.subtxt}>Local host information</h4>
        <Card className={classes.Card}>
          <Accordion.Toggle
            className="text-dark font-weight-bold bg-white"
            as={Card.Header}
            eventKey="4"
          >
            About
            <small className="ml-4 text-black-50">AboutYourself</small>
            <i className={`fa fa-caret-down ${classes.careticon}`}></i>
          </Accordion.Toggle>
          <Accordion.Collapse className={classes.Collapsebody} eventKey="4">
            <Card.Body>
              <small>Some thing About you</small>
              <form>
                <textarea
                  name="about"
                  ref={register()}
                  id="about"
                  rows={4}
                  placeholder=" Enter text here..."
                  cols={50}
                />
                <Btns clicked={handleSubmit(SubmitBtn)} />
              </form>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card className={classes.Card}>
          <Accordion.Toggle
            className="text-dark font-weight-bold bg-white"
            as={Card.Header}
            eventKey="5"
          >
            Moto
            <small className="ml-4 text-black-50">
              Yout Moto for give mans
            </small>
            <i className={`fa fa-caret-down ${classes.careticon}`}></i>
          </Accordion.Toggle>
          <Accordion.Collapse className={classes.Collapsebody} eventKey="5">
            <Card.Body>
              <small>Your Moto</small>
              <form>
                <textarea
                  ref={register()}
                  name="motto"
                  id="motto"
                  placeholder="Enter text here..."
                  rows={4}
                  cols={50}
                />
                <Btns clicked={handleSubmit(SubmitBtn)} />
              </form>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card className={classes.Card}>
          <Accordion.Toggle
            className="text-dark font-weight-bold bg-white"
            as={Card.Header}
            eventKey="6"
          >
            Activities
            <small className="ml-4 text-black-50">
              Your Activities in your Tour
            </small>
            <i className={`fa fa-caret-down ${classes.careticon}`}></i>
          </Accordion.Toggle>
          <Accordion.Collapse className={classes.Collapsebody} eventKey="6">
            <Card.Body>Hello! I'm the body</Card.Body>
          </Accordion.Collapse>
        </Card>
        <h4 className={classes.subtxt}>Contact information</h4>
        <Card className={classes.Card}>
          <Accordion.Toggle
            className="text-dark font-weight-bold bg-white"
            as={Card.Header}
            eventKey="7"
          >
            Email
            <small className="ml-4 text-black-50">Your Email Account</small>
            <i className={`fa fa-caret-down ${classes.careticon}`}></i>
          </Accordion.Toggle>
          <Accordion.Collapse className={classes.Collapsebody} eventKey="7">
            <Card.Body>
              <small>Enter your Email</small>
              <form>
                <input
                  ref={register()}
                  id="email"
                  name="email"
                  className="mt-2"
                  placeholder="Name"
                />
                <Btns clicked={handleSubmit(SubmitBtn)} />
              </form>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card className={classes.Card}>
          <Accordion.Toggle
            className="text-dark font-weight-bold bg-white"
            as={Card.Header}
            eventKey="8"
          >
            Phone Number
            <small className="ml-4 text-black-50">
              Your Phone number for call you
            </small>
            <i className={`fa fa-caret-down ${classes.careticon}`}></i>
          </Accordion.Toggle>
          <Accordion.Collapse className={classes.Collapsebody} eventKey="8">
            <Card.Body>
              <small>Enter your Phone number</small>
              <form>
                <input
                  ref={register()}
                  id="phone"
                  name="phone"
                  className="mt-2"
                  placeholder="Phone Number"
                />
                <Btns clicked={handleSubmit(SubmitBtn)} />
              </form>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </Col>
  );
}

export default Settings;
