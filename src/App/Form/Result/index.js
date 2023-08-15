import "./style.css"
export const Result = ({result}) => (
    <p className="result form__text">
        {!!result && (
            <>
                {result.inputAmount.toFixed(2)}&nbsp;PLN&nbsp;=&nbsp;

                <strong>
                    {result.resultAmount.toFixed(2)}&nbsp;{result.currency}
                </strong>
            </>
        )}
    </p>
);