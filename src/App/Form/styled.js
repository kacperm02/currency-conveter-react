import styled from "styled-components";

export const Header = styled.header`
    text-align: center;
    font-size: 30px;
    padding:10px;
`;

export const Span = styled.span`
    font-size: 20px;
`;

export const StyledInput = styled.input`
    border: 2px solid #606060;
    padding: 15px;
    font-size: 25px;
    width: 100%;
    max-width: 333px;
    border-radius:12px;
`;

export const StyledSelect = styled.select`
    border: 2px solid #606060;
    padding: 15px;
    font-size: 25px;
    width: 100%;
    max-width: 333px;
    border-radius:12px;
`;

export const StyledButton = styled.button`
    border: 2px solid #606060;
    padding: 15px;
    font-size: 25px;
    width: 100%;
    max-width: 367px;
    border-radius:12px;
    margin-top: 30px;
    background-color: hsl(231, 98%, 70%);

    &:hover {
        background-color: hsl(231, 98%, 65%);
        transition: 0.5s;
    }
`;