import React, { useContext } from "react";
import styled from "styled-components";

import { MiningContext } from "../Context";

const CTAbtn = styled.button`
  text-align: center;
  background: var(--color-accent);
  border-bottom: 6px inset rgba(0, 0, 0, 0.5);
  border-left: 6px inset rgba(0, 0, 0, 0.5);
  border-right: 6px inset rgba(255, 255, 255, 0.5);
  border-top: 6px inset rgba(255, 255, 255, 0.5);
  box-sizing: border-box;
  color: var(--color-grey);
  display: inline-block;
  font-family: var(--font-primary);
  font-size: 24px;
  min-width: 50px;
  padding: 0.5rem;
  text-transform: uppercase;
  width: auto;
  outline: none;
  margin:10px;
  @media (max-width: 1200px) {
    font-size: 22px;
  }

  @media (max-width: 896px) {
    font-size: 20px;
  }

  @media (max-width: 576px) {
    font-size: 18px;
  }
  &:focus,
  &:hover {
    background: var(--color-accent-light);
    cursor: none;
  }
  
`;

const CTAbtnComp = React.forwardRef(({ selectUserType, children, ...others }, ref) => {
  const setMining = useContext(MiningContext);

  return (
    <CTAbtn
      ref={ref}
      {...others}
      onMouseEnter={() => setMining(true)}
      onMouseLeave={() => setMining(false)}
      onClick={(e) => selectUserType(e)}
    >
      {children}
    </CTAbtn>
  );
});

export default CTAbtnComp;