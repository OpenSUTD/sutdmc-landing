import React from "react";
import styled from "styled-components";

import HeroImage from "./HeroImage";
import Content from "./Content";

const Main = styled.main`
  width: 100vw;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 10%;

  @media (max-width: 1200px) {
    padding: 0 7.5%;
  }

  @media (max-width: 896px) {
    padding: 20px 15%;
    height: auto;
    flex-direction: column;
  }

  @media (max-width: 576px) {
    height: auto;
    padding: 0 20px;
  }
`;

const MainComp = ({ blockCount, setBlockCount }) => {
  return (
    <Main>
      <HeroImage blockCount={blockCount} setBlockCount={setBlockCount} />
      <Content />
    </Main>
  );
};

export default React.memo(MainComp);
