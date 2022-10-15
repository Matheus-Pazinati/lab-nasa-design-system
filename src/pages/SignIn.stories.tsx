import { Meta, StoryObj } from '@storybook/react'
import { SignIn } from "./SignIn";

import { expect } from '@storybook/jest';
import { userEvent, waitFor, within } from '@storybook/testing-library';

import { rest } from 'msw'

export default {
  title: 'Pages/SignIn',
  component: SignIn,
  args: {},
  parameters: {
    msw: {
      handlers: [
        rest.post('/sessions', (req, res, ctx) => {
          return res(ctx.json({
            message: 'Login realizado!'
          }))
        })
      ]
    }
  }
} as Meta

export const Default: StoryObj = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    userEvent.type(canvas.getByPlaceholderText('pedrohenrique@example.com'), 'pedrohenrique@gmail.com')
    userEvent.type(canvas.getByPlaceholderText('********'), '123456789')
    userEvent.click(canvas.getByRole('button'))

    await waitFor(() => {
      return expect(canvas.getByText('Login realizado!')).toBeInTheDocument()
    })
  }
}
