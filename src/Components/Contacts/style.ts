import styled from "styled-components";

export const Cdata = styled.li `
    margin: 0 auto;
    margin-top: 0.5vh;
    border: 1px solid;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 80%;
    font-family: "Markazi Text", serif;
    align-items: center;

    input {
        margin-left: 1vw;
    }
    
    p {
        text-align: center;
        margin-top: 1vh;
        margin-bottom: 1vh;
        strong {
            margin-left: 1vw;
        }
    }


    @media (max-width: 620px) {
        p {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-left: 1vw;
        }
    }
`;
