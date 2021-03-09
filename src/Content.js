import React from "react";
import styled from "styled-components";
import { Switch, Route } from "react-router-dom";

// import Home from "./pages/Home";
// import About from "./pages/About";
// import Elsewhere from "./pages/Elsewhere";
import Error from "./pages/Error";
import ASDProjects from './pages/ASDProjects';
// import ASDProjectPage from './pages/ASDProjectPage';
import GamePage from './pages/GamePage';
import OH2021 from './pages/OH2021';

import ComingSoon from './pages/ComingSoon';

import Campus from "./pages/Campus";


const Content = styled.div`
  max-height: 100%;
  width: 100%;
  //overflow-y: auto;
  //margin-left: 150px;

  @media (max-width: 1200px) {
    margin-left: 100px;
  }

  @media (max-width: 896px) {
    margin-left: 0;
    margin-top: 20px;
    padding-bottom: 20px;
    height: auto;
  }
`;

const ContentComp = () => {
  return (
    <Content>
      <Switch>
        <Route exact path="/">
          {/* <Home /> */}
          <OH2021 />
        </Route>
        <Route exact path="/about">
          {/* <About /> */}
          <ComingSoon/>
        </Route>
        <Route exact path="/elsewhere">
          {/* <Elsewhere /> */}
          <ComingSoon/>
        </Route>
        <Route exact path="/oh2021">
          <OH2021 />
        </Route>
        <Route exact path="/oh2021/:id">
          <GamePage />
        </Route>
        <Route exact path="/asd2020">
          <ASDProjects />
          {/* <ComingSoon/> */}
        </Route>
        <Route exact path="/asd2020/:id">
          {/* <ASDProjectPage /> */}
          <ComingSoon/>
        </Route>
        <Route exact path="/campus">
          <Campus/>
        </Route>
        <Route exact path="/oh2020">
          <ComingSoon/>
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Content>
  );
};

export default ContentComp;
