import React from "react"
import { GlobalStyle } from "../../GlobalStyle"
import { InputStyle } from "./style"
import { Envelope } from "phosphor-react"

export function Input(props) {

    return (
        <>
            <GlobalStyle/>
            <InputStyle>
                <Envelope/>
                <input {...props}/>
            </InputStyle>
        </>
    )
}