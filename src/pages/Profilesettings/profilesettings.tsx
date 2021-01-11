import React, { ReactElement, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Settings from "../../components/settings";
import SettingsInfo from "../../components/settingsInfo";

function ProfileSettings(): ReactElement {
  useEffect(()=>{
    window.scroll(0,0)
  })
  return (
    <Container className="mt-5">
      <Row>
        <Settings />
        <SettingsInfo />
      </Row>
    </Container>
  );
}

export default ProfileSettings;
