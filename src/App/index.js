import { useState } from 'react';
import { currencies } from './currencies';
import Form from './Form';
import {Clock} from './Clock';
import './App.css';
import { StyledApp, StyledBody } from './styled';

function App() {
  const [result,setResult] = useState();

  const calculateResult = (currency, amount) => {
    const rate = currencies
    .find(({cut}) => cut === currency)
    .rate;

    setResult({
      inputAmount: +amount,
      resultAmount: amount / rate,
      currency,
    });
  }

  

  return (
    <StyledBody>
    <StyledApp>
      <Clock/>
      <Form result={result} calculateResult={calculateResult}/>
    </StyledApp>
    </StyledBody>
  );
}

export default App;
