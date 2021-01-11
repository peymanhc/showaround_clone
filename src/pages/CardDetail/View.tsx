import React, { useState, useEffect } from "react";
import Header from "../../components/DetailHeader";
import DetailProfile from "../../components/DetailProfile";
import Detail from "../../components/Detail";
import axios from "../../shared/axios-datas";
import Spinner from "../../components/Spinner/Spinner";
import { useParams } from "react-router-dom";

function View() {
  const params: any = useParams();
  const [Data, setData] = useState();
  useEffect(() => {
    window.scroll(0,0)
    axios.get("profiles/" + params.id).then((res: any) => {
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
          <Detail
            name={Data.name}
            city={Data.city}
            text={Data.text}
            aboutme={Data.aboutme}
            languages={Data.languages}
            activities={Data.activities}
            review={Data.review}
            star={Data.star}
            phone={Data.phoneNumber}
            email={Data.Email}
          />
        </>
      )}
    </div>
  );
}

export default View;
