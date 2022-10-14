import styled from "styled-components"

export const Container = styled.div `
width: 100vw;
min-height: 100vh;
background-color: var(--grey900);
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
header {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    svg {
        margin-bottom: 8px;
    }
}

form {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    margin-top: 40px;
    gap: 16px;
    label {
        width: 100vw;
        max-width: 400px;
        :nth-child(1) {
            display: flex;
            flex-direction: column;
            gap: 12px;
            font-weight: 600;
        }
        :nth-child(2) {
            display: flex;
            flex-direction: column;
            gap: 12px;
            font-weight: 600;
        }
        :nth-child(3) {
            display: flex;
            gap: 8px;
            align-items: center;
            margin-bottom: 16px;
        }
    }
}
footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    margin-top: 32px;
    a {
        color: var(--grey400);
        font-size: var(--xs);
        :hover {
            color: var(--grey200);
        }
    }
}
`