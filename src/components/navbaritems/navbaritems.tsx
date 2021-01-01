import React, { ReactElement } from "react";
import { Link } from "react-router-dom";

function navbaritems(props: any): ReactElement {
  return (
    <li className="nav-item dropdown mr-3">
      <Link className="nav-link" to={props.link}>
        {props.children}
      </Link>
    </li>
  );
}

export default navbaritems;
