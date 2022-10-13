import React from "react"
import { GlobalStyle } from "../../GlobalStyle"
import { Title } from "./style"
//import { Slot } from "@radix-ui/react-slot"


//fontSize pode ser sm, md, lg
export function Text({text, fontSize='md'}) {
    if(fontSize === 'sm') {
        fontSize = 'var(--xs)'
    } else if (fontSize === 'md') {
        fontSize = 'var(--sm)'
    } else if (fontSize === 'lg') {
        fontSize = 'var(--md)'
    }

    return (
        <>
            <GlobalStyle/>
            <Title font={fontSize}>{text}</Title>
        </>
    )
}