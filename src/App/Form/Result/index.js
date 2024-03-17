import { StyledResult } from "./styled";

export const Result = ({result}) => (
    <StyledResult>
        {!!result && (
            <>
                {result.inputAmount.toFixed(2)}&nbsp;PLN&nbsp;=&nbsp;

                <strong>
                    {result.resultAmount.toFixed(2)}&nbsp;{result.currency}
                </strong>
            </>
        )}
    </StyledResult>
);