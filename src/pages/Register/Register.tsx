import React, { ReactElement, useEffect } from "react";

import Header from "../../components/RegisterHeader";
import RegisterBody from "../../components/RegisterBody";
import RegisterForm from "../../components/RegisterForm";

function Register(): ReactElement {
  useEffect(()=>{
    window.scroll(0,0)
  })
  return (
    <div>
      <Header />
      <RegisterBody />
      <RegisterForm />
    </div>
  );
}

export default Register;
