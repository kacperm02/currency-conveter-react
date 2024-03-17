import { useState } from "react";
import { currencies } from "../currencies";
import { Result } from "./Result";
import { Header, Span, StyledInput, StyledSelect, StyledButton } from "./styled";

const Form = ({calculateResult, result}) => {
    const [currency, setCurrency] = useState(currencies[0].cut);
    const [amount, setAmount] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();
        calculateResult(currency, amount);
    };

    return (
        <form onSubmit={onSubmit}>
            <Header>
                Przelicznik walut
            </Header>
            <p>
                <label>
                    <Span>
                        Kwota w PLN:
                    </Span>
                    <StyledInput
                        value={amount}
                        onChange={({target}) => setAmount(target.value)}
                        placeholder="Kwota w PLN"
                        type="number"
                        required
                        step="0.01"
                    />
                </label>
            </p>
            <p>
                <label>
                    <Span>
                        Wybierz walute
                    </Span>
                    <StyledSelect
                    value={currency}
                    onChange={({target}) => setCurrency(target.value)}
                    >
                        {currencies.map((currency => (
                            <option
                            key={currency.cut}
                            value={currency.cut}
                            >
                                {currency.content}
                            </option>
                        )))}
                    </StyledSelect>
                </label>
            </p>
            <p>
                <StyledButton>Przelicz!</StyledButton>
            </p>
            
            <Result result={result}/>
        </form>
    );
};

export default Form;