import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Footer from "../components/footer";
import Navbar from "../components/navbar";

const layout: React.FC = (props) => {
  return (
    <div style={{ background: "#f0f2e9" }}>
      <Navbar />
      <div style={{ marginTop: 54 }}>{props.children}</div>
      <Footer />
    </div>
  );
};

export default layout;
