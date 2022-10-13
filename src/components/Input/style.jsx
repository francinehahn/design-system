import styled from "styled-components"


export const InputStyle = styled.div `
    display: flex;
    align-items: center;
    padding-left: 12px;
    border-radius: 4px;
    background-color: var(--grey800);
    width: 100vw;
    :focus-within {
        outline: 2px solid var(--cyan300);
    }
    svg {
        width: 24px;
        height: 24px;
        color: var(--grey400);
    }
    input {
        color: var(--grey100);
        font-size: var(--xs);
        background-color: var(--transparent);
        padding: 16px 12px;
        border-radius: 4px;
        border: none;
        outline: none;
        width: 100%;
        height: 100%;
        ::placeholder {
            color: var(--grey400);
        }
    }
`