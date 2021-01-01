import { makeStyles } from "@material-ui/styles";
import React from "react";

const useStyles = makeStyles({
  root: {
    marginTop: 30,
    width: 50,
    height: 50,
    background: "red",
    display: "flex",
    color: "white",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 20,
    "&:hover": {
      color: "white",
      textDecoration: "none",
    },
  },
});

interface Props {
  bgcolor: string;
  icon: string;
}

const Brands = (props: Props) => {
  const styles = useStyles();
  return (
    <a
      href="#1"
      style={{ backgroundColor: props.bgcolor }}
      className={styles.root}
    >
      <i className={props.icon}></i>
    </a>
  );
};

export default Brands;
