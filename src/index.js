import React, { useState } from "react";
import { render } from "react-dom";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";


const CompoundInterest = () => {
  const [price, setPrice] = useState();
  const [taxes, setTaxes] = useState();
  const [insurance, setInsurance] = useState();
  const [hoa, setHoa] = useState();
  const [downPayment, setDownPayment] = useState();
  const [interestRate, setInterestRate] = useState();
  const [months, setMonths] = useState();
  const [result, setResult] = useState();

  const calculate = () => {
    //principal and interest function
    const paymentPI = (interestRate * (price - downPayment)) / (1- (Math.pow((1 + interestRate), (-months))));

    //Taxes, Insurance, HOA Dues
    const paymentTIA = parseInt(hoa) + parseInt(insurance) + parseInt(taxes)

    //Final Result
    const result = paymentPI + paymentTIA;
    setResult(result.toFixed(2));
  };
    //Note: The interestRate is divided by 1200 because it is divided 100 (percenttodecimal) and by 12 (annual to monthly APR)
    return (
      <>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "40vh",
          }}
        >

          <form>
            <TextField 
            label="Price of Home" 
            variant="outlined"
            type="number"
            onChange={(e) => {
              setPrice(e.target.value);
              console.log(price);
            }}
            />

            <TextField 
            label="Down Payment ($)" 
            variant="outlined"
            type="number"
            onChange={(e) => setDownPayment(e.target.value)}
            />

            <TextField 
            label="Ineterest Rate (APR)" 
            variant="outlined"
            type="number"
            onChange={(e) => setInterestRate(e.target.value / 1200)}
            />

            <TextField 
            label="Length of Mortgage (Years)" 
            variant="outlined"
            type="number"
            onChange={(e) => setMonths(e.target.value * 12)}
            />

            <TextField 
            label="Property Tax (Monthly)" 
            variant="outlined"
            type="number"
            onChange={(e) => setTaxes(e.target.value)}
            />

            <TextField 
            label="Insurance (Monthly)" 
            variant="outlined"
            type="number"
            onChange={(e) => setInsurance(e.target.value)}
            />

            <TextField 
            label="HOA Dues (Monthly)" 
            variant="outlined"
            type="number"
            onChange={(e) => setHoa(e.target.value)}
            />

            <br />
            <Button 
              variant="contained" 
              color="primary" 
              onClick={() => {
                calculate();
              }}
              >
              Calculate
            </Button>
            <br />
            <div style={{ fontSize: "30px" }}>${result}</div>
          </form>
        </div>
      </>
    );
};

render(<CompoundInterest />, document.querySelector("#root"));
