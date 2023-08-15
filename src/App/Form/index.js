import { useState } from "react";
import { currencies } from "../currencies";
import { Result } from "./Result";
import "./style.css"

const Form = ({calculateResult, result}) => {
    const [currency, setCurrency] = useState(currencies[0].cut);
    const [amount, setAmount] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();
        calculateResult(currency, amount);
    };

    return (
        <form onSubmit={onSubmit}>
            <h1 className="header__content">
                Przelicznik walut
            </h1>
            <p>
                <label>
                    <span className="form__text">
                        Kwota w PLN:
                    </span>
                    <input
                        value={amount}
                        onChange={({target}) => setAmount(target.value)}
                        placeholder="Kwota w PLN"
                        type="number"
                        required
                        step="0.01"
                        className="form__field"
                    />
                </label>
            </p>
            <p>
                <label>
                    <span className="form__text">
                        Wybierz walute
                    </span>
                    <select
                    className="form__field"
                    value={currency}
                    onChange={({target}) => setCurrency(target.value)}
                    >
                        {currencies.map((currency => (
                            <option
                            key={currency.cut}
                            value={currency.rate}
                            >
                                {currency.content}
                            </option>
                        )))}
                    </select>
                </label>
            </p>
            <p>
                <button className="form__button">Przelicz!</button>
            </p>
            
            <Result result={result}/>
        </form>
    );
};

export default Form;