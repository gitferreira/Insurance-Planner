import React from "react";
import styled from "@emotion/styled";
import {TransitionGroup, CSSTransition } from "react-transition-group"


const CalculationContainer = styled.div`
text-align: center;
padding: 0.5rem;
border: 1px solid #26c6da;
background-color: rgb(127, 224, 237);
margin-top: 1rem;
position: relative;
`

const TotalCalculation = styled.p`
color: #00838f;
padding: 1rem;
text-transform: uppercase;
font-weight: bold;
margin: 0;
`

const Result = ({ calculation }) => {
  return (
    (calculation === 0 ? null : (
        <CalculationContainer>  
            <TransitionGroup
            component= "p"
            className = "resultado"
            >
                <CSSTransition
                classNames = "resultado"
                key = {calculation}
                timeout = {{enter: 500, exit: 500}}
                >
                <TotalCalculation>Total is: {calculation}€</TotalCalculation>
                </CSSTransition>
            </TransitionGroup>
        </CalculationContainer>))
   
  )
}

export default Result;
 