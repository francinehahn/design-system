import styled from "styled-components"


export const InputStyle = styled.div `
    display: flex;
    align-items: center;
    padding-left: 12px;
    border-radius: 4px;
    background-color: var(--grey800);
    width: 100%;
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
        background-color: var(--grey800);
        padding: 16px 12px;
        border: none;
        outline: none;
        width: 100%;
        height: 95%;
        :-webkit-autofill {
            box-shadow: 0 0 0 30px var(--grey800) inset;
            -webkit-text-fill-color: var(--grey100) !important;
        }
        ::placeholder {
            color: var(--grey400);
        }
    }
`