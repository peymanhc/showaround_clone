import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";

import * as paths from "./path";

import Layout from "../layout/layout";

import { CardDetail } from "../pages/CardDetail/index";
import { HomePage } from "../pages/Home/index";
import { Register } from "../pages/Register/index";
import { CreateTrip } from "../pages/CreateTrip/index";
import { ProfileSettings } from "../pages/Profilesettings";
import MyProfile from "../pages/myProfile/myProfile";
import { Aboutme } from "../pages/Aboutme";
import { Authenticated } from "../pages/Authenticated";
import Blog from "../pages/Blog/Blog";
import Loading from "../components/loading/Loading";

export const Routes: React.FC = () => {
  const [isloading, setIsloading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsloading(false);
    }, 2300);
  });
  return (
    <>
      {isloading ? (
        <Loading />
      ) : (
        <Layout>
          <Switch>
            <Route exact path={paths.baseUrl} component={HomePage} />
            <Route exact path={paths.Aboutme} component={Aboutme} />
            <Route path={`${paths.CardDetail}:id`} component={CardDetail} />
            <Route exact path={paths.Register} component={Register} />
            {!localStorage.getItem("token") ? (
              <Authenticated />
            ) : (
              <>
                <Route exact path={paths.CreateTrip} component={CreateTrip} />
                <Route
                  exact
                  path={paths.Settings}
                  component={ProfileSettings}
                />
                <Route exact path={paths.MyProfile} component={MyProfile} />
                <Route exact path={paths.Blog} component={Blog} />
              </>
            )}
          </Switch>
        </Layout>
      )}
    </>
  );
};

export default Routes;
