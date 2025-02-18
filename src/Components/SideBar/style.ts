import styled from "styled-components";

export const Bar = styled.ul`
    display: block;
    align-items: center;
    height: 95vh;
    margin-top: 2.5vh;
`;

export const Link = styled.li<{ selecionado: boolean }>`
    background-color: ${({ selecionado }) => (selecionado ? "#ffda79" : "#ccae62")};
    height: 3.65vh;
    min-height: 20px;
    border: 1px solid;
    border-color: black;
    font-family: "Lavishly Yours", serif;
    font-size: clamp(15px, 2vh);
    font-weight: bold;
    text-align: center;
    cursor: pointer;
`;



