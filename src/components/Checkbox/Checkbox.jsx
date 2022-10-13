import React, {useState} from "react"
import { GlobalStyle } from "../../GlobalStyle"
import { CheckboxStyle } from "./style"
import { Check } from "phosphor-react"

export function Checkbox() {
    const [checked, setChecked] = useState(false)

    return (
        <>
            <GlobalStyle/>
            <CheckboxStyle onClick={() => setChecked(!checked)}>
                {checked && <Check/>}
            </CheckboxStyle>
        </>
    )
}