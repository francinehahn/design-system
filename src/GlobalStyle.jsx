import { createGlobalStyle } from "styled-components"

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