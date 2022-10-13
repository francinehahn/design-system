import styled, { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle `
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Inter', sans-serif;
    }

    :root {
        --black: #000;
        --white: #fff;
        --transparent: transparent;
        --grey900: #121214;
        --grey800: #202024;
        --grey400: #9a9aaa;
        --grey200: #CACACC;
        --grey100: #E1E1E6;
        --cyan500: #81D8F7;
        --cyan300: #a2e0f6;
        --xs: 14px;
        --sm: 16px;
        --md: 18px;
        --lg: 20px;
        --xl: 24px;
        --2xl: 32px;
    }
`

export const Container = styled.div `
    width: 100vw;
    height: 100vh;
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