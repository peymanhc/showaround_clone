import React from "react";
import { makeStyles } from "@material-ui/styles";
import * as Routes from "../../routes";
import { useDispatch } from "react-redux";
import { logout } from "../../store/actions/auth";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  profile: {
    display: "contents",
  },
  img: {
    width: "35px",
    height: "35px",
    borderRadius: "50%",
    objectFit: "cover",
  },
  name: {
    color: "rgba(0,0,0,0.7)",
    background: "transparent",
    border: "none",
    fontWeight: 800,
    fontSize: "13px",
    "&:hover": {
      background: "transparent",
      color: "gray",
    },
    "&:focus": {
      background: "transparent !important",
      color: "black !important",
      boxShadow: "none !important",
    },
    "&:active": {
      color: "white !important",
      textDecoration: "none !important",
      backgroundColor: "#d87e18 !important",
    },
  },
  links: {
    "&:active": {
      color: "white !important",
      textDecoration: "none !important",
      backgroundColor: "#d87e18 !important",
    },
  },
});

const NavbarProfile: React.FC = () => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const loggingout = () => dispatch(logout());

  return (
    <div className={`ml-5 ${classes.profile}`}>
      <div className="btn-group">
        <img
          alt="profile"
          className={classes.img}
          src={require("../../images/profile.jpg")}
        />
        <button type="button" className={classes.name} data-toggle="dropdown">
          <span>Peymanhc<i className="ml-2 fa fa-caret-down" ></i></span>
        </button>
        <div className="dropdown-menu">
          <Link
            to={Routes.MyProfile}
            className={`dropdown-item ${classes.links}`}
          >
            {" "}
            View Profile
          </Link>
          <Link
            to={Routes.Settings}
            className={`dropdown-item ${classes.links}`}
          >
            Profile Settings
          </Link>
          <div className="dropdown-divider"></div>
          <a
            href="#LogOut"
            onClick={loggingout}
            className={`dropdown-item ${classes.links}`}
          >
            Sign Out
          </a>
        </div>
      </div>
    </div>
  );
};
export default NavbarProfile;
