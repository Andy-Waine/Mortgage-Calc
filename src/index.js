import React, { useState } from "react";
import { render } from "react-dom";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";


const CompoundInterest = () => {
  const [price, setPrice] = useState();
  const [downPayment, setDowmPayment] = useState();
  const [interestRate, setInterestRate] = useState();
  const [months, setMonths] = useState();
  const [result, setResult] = useState();

  const calculate = () => {
    const result = (price - downPayment) * Math.pow(1 + interestRate, months)
    setResult(result.toFixed(2));
  };

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
            onChange={(e) => setPrincipal(e.target.value)}
            />

            <TextField 
            label="Down Payment" 
            variant="outlined"
            onChange={(e) => setDownPayment(e.target.value)}
            />

            <TextField 
            label="Ineterest Rate (APR)" 
            variant="outlined"
            onChange={(e) => setInterestRate(e.target.value / 100)}
            />

            <TextField 
            label="Length of Mortgage (Years)" 
            variant="outlined"
            onChange={(e) => setMonths(e.target.value * 12)}
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
