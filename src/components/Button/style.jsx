import styled from "styled-components"


export const ButtonStyle = styled.button `
    cursor: pointer;
    color: var(--black);
    font-size: var(--sm);
    font-weight: 600;
    padding: 12px;
    border-radius: 4px;
    border: none;
    background-color: var(--cyan500);
    width: 100%;
    :hover {
        background-color: var(--cyan300);
    }
`