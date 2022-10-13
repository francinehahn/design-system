import { Text } from "./Text"
//import {Meta, StoryObj} from '@storybook/react'

export default {
    title: 'Components/Text',
    component: Text,
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