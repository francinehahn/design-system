import React from "react"
import { GlobalStyle } from "../../GlobalStyle"
import { ButtonStyle } from "./style"


export function Button({text, type="submit"}) {

    return (
        <>
            <GlobalStyle/>
            <ButtonStyle type={type}>{text}</ButtonStyle>
        </>
    )
}