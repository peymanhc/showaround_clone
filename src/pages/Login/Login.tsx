import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { Button, Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import * as Routes from "../../routes";
import { useDispatch } from "react-redux";
import { authSuccess } from "../../store/actions/auth";

const useStyles = makeStyles({
  btnsign: {
    background: "#f38630",
    color: "white",
    textAlign: "center",
    margin: "10px",
    padding: "4px 40px",
    fontWeight: 700,
    border: "2px solid #f38630",
    textTransform: "uppercase",
    borderRadius: "4px",
    fontSize: 12,
    "&:hover": {
      background: "#b86b13",
    },
  },
  connect: {
    background: "white",
    color: "rgba(145, 145, 145,0.95)",
    textTransform: "uppercase",
    margin: "10px",
    padding: "4px 35px",
    border: "2px solid rgb(145, 145, 145)",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: 12,
    fontWeight: 700,
    "&:hover": {
      color: "white",
      background: "rgb(145, 145, 145)",
    },
  },
  Modal: {
    marginTop: "15em",
  },
  Title: {
    textAlign: "center",
    justifyContent: "center",
    fontWeight: 800,
    borderBottom: "1px solid #d87e18",
    textShadow: "1px 0px 1px black",
  },
  input: {
    textAlign: "center",
    width: "100%",
    margin: "10px auto",
    padding: "5px",
    boxShadow: "1px 1px 1px #d87e18",
    borderRadius: "10px",
  },
  submit: {
    background: "transparent",
    border: "1px solid #d87e18",
    color: "#d87e18",
  },
});

interface Props {
  showModal?: boolean;
  token?: string;
}

const Login: React.FC<Props> = ({ showModal }) => {
  const [show, setShow] = useState((showModal = false));
  const handleClose = () => setShow((showModal = false));
  const handleShow = () => setShow((showModal = true));

  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  useEffect(() => {
    window.scroll(0, 0);
  });
  const SubmitBtn = (data: any) => {
    dispatch(
      authSuccess(
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

  const classes = useStyles();

  return (
    <div>
      <button onClick={handleShow} className={`m-2 ${classes.connect}`}>
        connect
      </button>
      <Link to={Routes.Register}>
        <button className={`m-2 ${classes.btnsign}`}>Sign Up As Local</button>
      </Link>
      <Modal className={classes.Modal} show={show} onHide={handleClose}>
        <Modal.Header className={classes.Title}>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            ref={register({ required: true })}
            id="email"
            name="email"
            className={classes.input}
            type="email"
            placeholder="Email"
          />
          <input
            ref={register({ required: true })}
            id="password"
            name="password"
            className={classes.input}
            type="password"
            placeholder="password"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button
            onClick={handleSubmit(SubmitBtn)}
            variant="light"
            className={classes.submit}
          >
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Login;
