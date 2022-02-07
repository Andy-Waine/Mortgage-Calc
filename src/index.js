import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { render } from '@testing-library/react';

const CompoundInterest = () => {
    return (
      <>
        <form>
          <TextField label="Outlined" variant="outlined" />
          <TextField label="Filled" variant="filled" />
          <TextField label="Standard" variant="standard" />
        </form>
      </>
    );
};

render(<CompoundInterest />, document.querySelector("#root"));
