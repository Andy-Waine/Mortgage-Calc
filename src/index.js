import React, { useState } from "react";
import { render } from "react-dom";
import Button from "@material-ui/core/Button";
import "./index.css";



//Master Calculator function with hooks
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
    //Note: The interestRate is divided by 1200 because it is divided 100 (percent to decimal) and by 12 (annual to monthly APR)
    return (
        <div className="glassContainer">
          <h2 className="calcHeader">Mortgage Calculator</h2>
            <div className="wrapperInput">
              <input 
              className="innerInput" 
              type="number"  
              placeholder="Price of Home" 
              onChange={(e) => setPrice(e.target.value)}
              />
              <div className="half-field-wrapper">
              <input 
              className="innerInput-half" 
              type="number"  
              placeholder="Down Payment ($)" 
              onChange={(e) => setDownPayment(e.target.value)}
              />              
              <input 
              className="innerInput-half" 
              type="number"  
              placeholder="Interest Rate (%)"
              onChange={(e) => setInterestRate(e.target.value / 1200)}
              />
              </div>              
              <input 
              className="innerInput" 
              type="number"  
              placeholder="Length of Mortgage (Years)"
              onChange={(e) => setMonths(e.target.value * 12)}
              />
              <div className="half-field-wrapper">     
              <input 
              className="innerInput-half" 
              type="number"  
              placeholder="Property Taxes" 
              onChange={(e) => setTaxes(e.target.value)}
              />              
              <input 
              className="innerInput-half" 
              type="number"  
              placeholder="Homeowners Insurance" 
              onChange={(e) => setInsurance(e.target.value)}
              />           
              </div>
              <input 
              className="innerInput" 
              type="number"  
              placeholder="HOA Dues" 
              onChange={(e) => setHoa(e.target.value)}
              />              
            </div>
              <br />
              <div className="buttonContainer">
                <Button 
                  className="buttonStyle"
                  onClick={() => {
                    calculate();
                  }}
                  >
                  Calculate
                </Button>
              </div>
              <div class="final-result" style={{ fontSize: "30px" }}>${result}</div>
        </div>
    );
};

render(<CompoundInterest />, document.querySelector("#root"));
