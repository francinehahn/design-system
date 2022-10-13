import { Checkbox } from "./Checkbox"
import { Text } from "../Text/Text"
import {ContainerCheckbox} from './style'

export default {
    title: 'Components/Checkbox',
    component: Checkbox,
    args: {},
    argTypes: {},
    decorators: [
        (Story) => {
            return (
                <ContainerCheckbox>
                    {Story()}
                    <Text text={'Lembrar de mim por 30 dias'} fontSize={'sm'}/>
                </ContainerCheckbox>
            )
        }
    ]
}

export const Default = {}