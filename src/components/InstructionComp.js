import React from "react";
import styled from "styled-components";

const InstructionComp = ({ children,stepNum, asd, ...others }) => {
  const Instruction = styled.div`
    width:auto;
    height:auto;
    display: flex;
    flex-direction: column;
    ;
  `

  const Step = styled.div`
    width:auto;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 4rem;
    ${asd ? 'justify-content: space-between;' :'justify-content: space-evenly;'}
    @media (max-width: 1025px) {
      margin-bottom: 2rem;

    }
  `
  const TextWrapper = styled.div`
    
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 25%;
    height: auto;
    @media (max-width: 1025px) {
      margin-bottom: 1rem;
      width: 100%;
      
    }
  `
  const StepImg = styled.img`
    width:55%;
    height:auto;
    
    @media (max-width: 1025px) {
      width: 100%;
      
    }
    
  `
  const InstructionHeader = styled.h3`
    font-family: var(--font-primary);
    line-height: 1.4;
    color: var(--color-accent);
    text-transform: uppercase;
    font-size: 30px;

    @media (max-width: 1200px) {
      font-size: 24px;
    }

    @media (max-width: 896px) {
      font-size: 20px;
    }

    @media (max-width: 576px) {
      font-size: 18px;
    }
  
  `
  return (
    <Instruction>

      <Step>
        <TextWrapper>
          <InstructionHeader>step {stepNum}</InstructionHeader>
          {children}
        </TextWrapper>
        {asd ? 
        <StepImg src={require(`../assets/images/asd-landing/instructions/step_${stepNum}.png`)}></StepImg>:
        <StepImg src = {require(`../assets/images/visiting_guide/step${stepNum}.png`)}></StepImg>}
        
      </Step>

    </Instruction>
  );
}

export default InstructionComp;