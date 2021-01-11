import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";
import * as Routes from "../../routes";

const useStyles = makeStyles({
  Authenticated: {
    maxWidth: "30em",
    padding: "3em",
    backgroundColor: "white",
    margin: "25vh auto",
    textAlign: "center",
    textShadow: "1px 1px 2px black",
  },
  button: {
    width: "10em",
    height: "3em",
    margin: "1em",
    backgroundColor: "white",
    color: "#d87e18",
    fontWeight: "bold",
    border: "none",
    boxShadow: "1px 1px 2px #d87e18",
  },
});

const Authenticated: React.FC = () => {
  const classes = useStyles();
  useEffect(()=>{
    window.scroll(0,0)
  })
  return (
    <div className={classes.Authenticated}>
      <h2> You Should be Login </h2>
      <h6> if you don't Have an account Create an account </h6>
      <Link to={Routes.baseUrl}>
        <button className={classes.button}>Return Home</button>
      </Link>
      <Link to={Routes.Register}>
        <button className={classes.button}> Register </button>
      </Link>
    </div>
  );
};

export default Authenticated;
