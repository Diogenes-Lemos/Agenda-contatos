import styled from "styled-components";

export const Sbtntop = styled.button<{ bgColor?: string }> `
    width: 20%;
    height: 8%;
    border: solid 1px;
    border-radius: 5%;
    background-color: ${(props) => props.bgColor || "#2ecc71"}; 
    min-width: 100px;
    min-height: 20px;
    cursor: pointer;
`;



