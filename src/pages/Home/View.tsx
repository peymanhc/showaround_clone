import React, { useState, useEffect } from "react";

import Header from "../../components/homeHeader";
import Card from "../../components/card";
import Tripbanner from "../../components/TripBanner";
import Bestleaders from "../../components/bestleaders";
import Infobox from "../../components/homeInfoBox";
import { useSelector, useDispatch } from "react-redux";
import { loadingCards } from "../../store/actions/cards";
import { loadingBestCards } from "../../store/actions/bestLeaders";
import Spinner from "../../components/Spinner/Spinner";

function View(showmore: boolean) {
  const dispatch = useDispatch();
  // Cards
  const Cardsdata = useSelector((state: any) => state.card.data);
  const Cardsloading = useSelector((state: any) => state.card.loading);
  const Cardserror = useSelector((state: any) => state.card.error);
  // BestLeaders
  const BestLeadersdata = useSelector((state: any) => state.bestleader.data);
  const BestLeadersloading = useSelector((state: any) => state.bestleader.loading);
  const BestLeaderserror = useSelector((state: any) => state.bestleader.error);
  const [show, setshow] = useState((showmore = false));

  useEffect(() => {
    dispatch(loadingCards());
    dispatch(loadingBestCards());
    window.scroll(0,0)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const visible = 6;
  const [Data, setData] = useState(visible);

  const loadMore = () => {
    setData((prev) => {
      return prev + 4;
    });
  };
  const ReadmoreHandler = () => {
    setshow(!show);
  };
  return (
    <div>
      <Header />
      <Card
        loadmore={loadMore}
        data={Data}
        cards={Cardsdata}
        errorcards={Cardserror}
        loadcards={Cardsloading}
      />
            <Tripbanner />
      {!BestLeadersdata ? (
        <Spinner />
      ) : (
        <Bestleaders
          bestcard={BestLeadersdata}
          load={BestLeadersloading}
          error={BestLeaderserror}
        />
      )} 
      <Infobox showtext={show} ReadmoreBtn={ReadmoreHandler} />
    </div>
  );
}

export default View;
