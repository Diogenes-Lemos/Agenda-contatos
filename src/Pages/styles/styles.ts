import styled from "styled-components";

export const EditArea = styled.div `
    display: flex;
    flex-direction: column;
    background-color: #ffda79;
    height: 95vh;
    margin-top: 2.5vh;
`;

export const EditTitle = styled.h2 `
    text-align: center;
    font-family: "Markazi Text", serif;
    font-size: 3vh;
    margin-top: 5vh;
`;

export const EditForm = styled.form `
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10vh;

    input {
        width: 70%;
    }

    label {
        font-family: "Markazi Text", serif;
        font-size: 3vh;
    }
`

