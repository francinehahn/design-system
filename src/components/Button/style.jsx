import styled from "styled-components"


export const ButtonStyle = styled.button `
    cursor: pointer;
    color: var(--black);
    font-size: var(--sm);
    font-weight: 600;
    padding: 16px 12px;
    border-radius: 4px;
    background-color: var(--cyan500);
    width: 100vw;
    :hover {
        background-color: var(--cyan300);
        transition: 1s;
    }
`