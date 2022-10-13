import React from "react"
import { GlobalStyle } from "../../GlobalStyle"
import { ButtonStyle } from "./style"


export function Button({text}) {

    return (
        <>
            <GlobalStyle/>
            <ButtonStyle>{text}</ButtonStyle>
        </>
    )
}