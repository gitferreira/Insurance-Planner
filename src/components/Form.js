import React, {useState} from "react";
import styled from "@emotion/styled";
import { yearDifference, brandPrice, planPrice} from "../helper"

const Field = styled.div`
display: flex;
margin-bottom: 1rem;
align-items:center;
`

const Label = styled.div`
flex: 0 0 100px;
`

const Select = styled.select`
display:block;
width: 100%;
padding:1rem;
border: 1px solid #e1e1e1;
-webkit-appearance: none;
`

const InputRadio = styled.input`
margin: 0 1rem;
`

const Button = styled.button`
background-color: #00838F;
font-size: 16px;
width: 100%;
padding: 1rem;
color: #fff;
text-transform: uppercase;
font-weight: bold;
border: none;
transition: background-color .3s ease;
margin-top: 1.5rem;

&:hover {
    background-color: #26C6DA;
    cursor: pointer;
}
`

const Error = styled.div`
background-color: tomato;
color: white;
padding: 1rem;
width: 100%;
text-align: center;
margin-bottom: 1rem;
`


const Form = ({setSummary}) => {

    const [data, setData] = useState({
        brand: "",
        year: "",
        plan:""
    })

    const [error, setError] = useState(false)

    //Extract values from state
    const {brand, year, plan} = data

    //Read data and save them in the State
    const getInfo = e => {
        setData({
            ...data,
            [e.target.name] : e.target.value
        })
    }

    //Submiting and calculating Insurance
    const calculateInsurance = e => {
      e.preventDefault()
        //Validating
      if(brand.trim()==="" || year.trim()===""|| plan.trim()===""){
        setError(true)
        return;
      }

        setError(false)
         //Price Base
    let base = 2000

    //Obtain difference in years
    const difference = yearDifference(year)


    //Substract value in regard of the year
    base -= ((difference * 3) * base) / 100


    //Model Price Increase
    base = base * brandPrice(brand)


    //Plan Price Increase
    const result = parseFloat((base * planPrice(plan)).toFixed(2))
    console.log(result)

    //Save it in props
    setSummary({
      calculation: result,
      data
    })
    }

   
  

  return (
    <form
    onSubmit = {calculateInsurance}
    >
      {error ? <Error>All fields must be filled</Error>: null}
      <Field>
        <Label>Brand</Label>
        <Select
        name = "brand"
        value = {brand}
        onChange = {getInfo}
        >
          <option value="">-- Select --</option>
          <option value="American">American</option>
          <option value="European">European</option>
          <option value="Asian">Asian</option>
        </Select>
      </Field>

      <Field>
        <Label>Year</Label>
        <Select
        name = "year"
        value = {year}
        onChange = {getInfo}
        >
          <option value="">-- Select --</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
          <option value="2014">2014</option>
          <option value="2013">2013</option>
          <option value="2012">2012</option>
        </Select>
      </Field>
      <Field>
        <Label>Plan</Label>
        <InputRadio type="radio" name="plan" value="basic" checked = {plan === "basic"} onChange = {getInfo}  /> Basic
        <InputRadio type="radio" name="plan" value="complete" checked = {plan === "complete"} onChange = {getInfo} /> Complete
      </Field>
      <Button type="submit">Calculate</Button>
    </form>
  );
};

export default Form;
