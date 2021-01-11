import React, { useState, useEffect } from "react";

import { Container, Row } from "react-bootstrap";
import Header from "../../components/DetailHeader";
import DetailProfile from "../../components/DetailProfile";
import DetailInfo from "../../components/DetailInfo";
import ProfileActions from "../../components/profileActions";
import axios from "../../shared/axios-datas";
import Spinner from "../../components/Spinner/Spinner";

const MyProfile: React.FC = () => {
  const [Data, setData] = useState();
  useEffect(() => {
    window.scroll(0,0)
    axios.get("profiles/1").then((res: any) => {
      setData(res.data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      {!Data ? (
        <Spinner />
      ) : (
        <>
          <Header
            city={Data.city}
            name={Data.name}
            image={Data.image}
            text={Data.text}
            price={Data.price}
          />
          <DetailProfile text={Data.text} />
          <Container>
            <Row>
              <DetailInfo
                city={Data.city}
                name={Data.name}
                text={Data.text}
                aboutme={Data.aboutme}
                languages={Data.languages}
                activities={Data.activities}
              />
              <ProfileActions
                name={Data.name}
                city={Data.city}
                review={Data.review}
                star={Data.star}
              />
            </Row>
          </Container>
        </>
      )}
    </div>
  );
};

export default MyProfile;
