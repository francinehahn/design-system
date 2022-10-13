import React from "react"
import { GlobalStyle } from "../../GlobalStyle"
import { Title } from "./style"


//fontSize pode ser sm, md, lg
export function Heading({text, fontSize='md', color="var(--grey100)"}) {
    if(fontSize === 'sm') {
        fontSize = 'var(--lg)'
    } else if (fontSize === 'md') {
        fontSize = 'var(--xl)'
    } else if (fontSize === 'lg') {
        fontSize = 'var(--2xl)'
    }

    return (
        <>
            <GlobalStyle/>
            <Title font={fontSize} color={color}>{text}</Title>
        </>
    )
}