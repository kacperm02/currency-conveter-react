import { useState } from 'react';
import { currencies } from './currencies';
import Form from './Form';
import './App.css';

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
    <div className="app">
      <Form result={result} calculateResult={calculateResult}/>
    </div>
  );
}

export default App;
