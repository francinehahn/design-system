import { Signin } from "./Signin"
import { within, userEvent, waitFor } from "@storybook/testing-library"
import { expect } from "@storybook/jest"
import { rest } from "msw"

export default {
    title: 'Pages/Signin',
    component: Signin,
    args: {},
    argTypes: {},
    parameters: {
        msw: {
            handlers: [
                rest.post('/sessions', (req, res) => {
                    return res(ctx.json({
                        message: 'Login realizado!'
                    }))
                })
            ]
        }
    }
}

export const Default = {
    play: async ({canvasElement}) => {
        const canvas = within(canvasElement)
        userEvent.type(canvas.getByPlaceholderText("Digite seu e-mail"), "fran_hahn@hotmail.com")
        userEvent.type(canvas.getByPlaceholderText("********"), "12345678")

        userEvent.click(canvas.getByRole('button'))

        await waitFor(() => expect(canvas.getByText('Login realizado!')).toBeInTheDocument())
    }
}