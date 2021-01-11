import React from "react";
import Navbaritems from "../navbaritems";
import Login from "../../pages/Login";
import NavbarProfile from "../navbarprofile";
import * as Routes from "../../routes";
import { Col, NavDropdown, Row } from "react-bootstrap";
import './styles.css'
const navbaritem: React.FC = () => {
  return (
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto font-weight-bold mr-4 ">
        <NavDropdown variant="success" title="Meet a local" id="basic-nav-dropdown">
          <Row style={{width:500,textAlign:"center",margin:"auto"}} >
            {Cities.map((item) => (
              <Col key={item.id} xs={4}>
                <NavDropdown.Item style={{width:150,fontSize:12}} href={`#${item.name}`}>
                  {item.name}
                </NavDropdown.Item>
              </Col>
            ))}
          </Row>
        </NavDropdown>
        <Navbaritems link={Routes.Blog}>Blog</Navbaritems>
        <Navbaritems link={Routes.Aboutme}>About Us</Navbaritems>
      </ul>
      {localStorage.getItem("token") !== null ? <NavbarProfile /> : <Login />}
    </div>
  );
};
const Cities = [
  {
    id: 1,
    name: "khorram abad",
  },
  {
    id: 2,
    name: "tabriz",
  },
  {
    id: 3,
    name: "tehran",
  },
  {
    id: 4,
    name: "mashhad",
  },
  {
    id: 5,
    name: "isfahan",
  },
  {
    id: 6,
    name: "rasht",
  },
  {
    id: 7,
    name: "anzali",
  },
  {
    id: 8,
    name: "kerman",
  },
  {
    id: 9,
    name: "ahvaz",
  },
];
export default navbaritem;
