import styled from "styled-components";

export const StyledApp = styled.div`
    display: flex;
    flex-direction: column;
    width:50%;
    max-width: 400px;
    margin:auto;
    background-color: #9eacfe;
    padding: 30px;
    border-radius: 12px;
    margin-top: 1%;

    @media  (max-width: 767px) {
      width: 100%;
      height: 100%;
      margin: 0;
    }
`;

export const StyledBody = styled.body`
    background-image: url("background.jpg");
    background-size: cover;
    background-repeat: no-repeat;
`;

