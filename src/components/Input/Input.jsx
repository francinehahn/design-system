import React from "react"
import { GlobalStyle } from "../../GlobalStyle"
import { InputStyle } from "./style"
import { Envelope } from "phosphor-react"
import { Lock } from "phosphor-react"

export function Input(props) {

    return (
        <>
            <GlobalStyle/>
            <InputStyle>
                {props.icon === "email" ? <Envelope/> : <Lock/>}
                <input {...props}/>
            </InputStyle>
        </>
    )
}