import { Heading } from "./Heading"

export default {
    title: 'Components/Heading',
    component: Heading,
    args: {
        text: 'Lorem ipsum.',
        fontSize: 'md'
    },
    argTypes: {
        fontSize: {
            options: ['sm', 'md', 'lg'],
            control: {
                type: 'inline-radio'
            }
        }
    }
}

export const Default = {}
export const Small = {
    args: {fontSize: 'sm'}
}
export const Large = {
    args: {fontSize: 'lg'}
}