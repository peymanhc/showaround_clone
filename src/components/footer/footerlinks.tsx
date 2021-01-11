import React from "react";

const Navbar: React.FC = (props) => {
  return (
    <div>
      <ul className="list-unstyled">
        <li>
          <a style={{ color: "#45c0f7" }} href="#!">
            {props.children}
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
