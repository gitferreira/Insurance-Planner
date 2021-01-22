import React, {Fragment} from 'react';
import {upper} from "../helper";
import styled from "@emotion/styled";




const SummaryContainer = styled.div`
padding: 1rem;
text-align: center;
background-color: #00838f;
color: #fff;
margin-top: 1rem;
`

const Summary = ({data}) => {

    const {brand, year, plan} = data
    return (
        
        <SummaryContainer> 
        <h2>Summary</h2>
        <ul>
            <li>Brand: {upper(brand)}</li>
            <li>Year: {upper(year)} </li>
            <li>Plan: {upper(plan)} </li>
        </ul>
        </SummaryContainer>
      );
      
}
 
export default Summary;