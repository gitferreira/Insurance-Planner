import React, {useState} from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Summary from "./components/Summary";
import Result from "./components/Result";
import Spinner from "./components/Spinner";

import styled from "@emotion/styled";

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const FormContainer = styled.div`
  background-color: #ffffff;
  padding: 3rem;
`;

function App() {
  
  const [summary, setSummary] = useState({
    calculation: 0,
    data: {
      brand: "",
      year: "",
      plan: ""
    }
  })

  const [loading, setLoading] = useState(false)
  
  const { data, calculation } = summary
 
  return (
    <Container>
      <Header title="Car Insurance Calculator" />
     
      <FormContainer>
       
        <Form 
        setSummary = {setSummary}
        setLoading = {setLoading}
        />
         {loading ? <Spinner /> : null}
        {data ? <Summary
          data = {data}
        /> : null}

        <Result 
        calculation = {calculation}
      
        />
       
      </FormContainer>
    </Container>
  );
}

export default App;
