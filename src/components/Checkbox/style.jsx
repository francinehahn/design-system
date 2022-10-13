import styled from "styled-components"


export const CheckboxStyle = styled.div `
    width: 24px;
    height: 24px;
    background-color: var(--grey800);
    border-radius: 4px;
    padding: 2px;
    cursor: pointer;
    svg {
        width: 20px;
        height: 20px;
        color: var(--cyan500);
    }
`

export const ContainerCheckbox = styled.div `
    display: flex;
    align-items: center;
    gap: 8px;
`