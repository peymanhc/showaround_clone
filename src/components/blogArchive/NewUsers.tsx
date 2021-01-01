import { makeStyles } from "@material-ui/styles";
import React from "react";

const useStyles = makeStyles({
  title: {
    fontSize: 18,
    fontWeight: 700,
    marginBottom: 20,
  },
  imgprofile: {
    borderRadius: "50%",
    width: 60,
    height: 60,
    objectFit: "cover",
  },
  decription: {
    maxHeight: 45,
    fontSize: 12,
    color: "rgba(0,0,0,0.4)",
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    "-webkit-line-clamp": 2,
    "-webkit-box-orient": "vertical",
  },
  checked: {
    color: "orange",
  },
});
interface Props {
  name: string;
  text: string;
  image: string;
  star: number;
}

const NewUsers = (props: Props) => {
  const styles = useStyles();
  return (
    <div className="d-flex">
      <img
        className={styles.imgprofile}
        alt="profile"
        src={props.image}
      />
      <div className="pl-2">
        <h6 className="font-weight-bold d-flex">
          {props.name}
          <span style={{ color: "#f38630" }} className="ml-2">
            {console.log(props.star)}
            {"★".repeat(Math.round(props.star)) +
              "☆".repeat(5 - Math.round(props.star))}
          </span>
        </h6>
        <p className={styles.decription}>{props.text}</p>
      </div>
    </div>
  );
};

export default NewUsers;
