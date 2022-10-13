import { Meta, StoryObj } from '@storybook/react'
import { TextInput, TextInputInputProps, TextInputRootProps } from "./TextInput";
import { EnvelopeSimple } from 'phosphor-react'

export default {
  title: 'Components/TextInput',
  component: TextInput.Root,
  args: {
    children: [
      <TextInput.Icon>
        <EnvelopeSimple />
      </TextInput.Icon>,
      <TextInput.Input placeholder='Input placeholder' />
    ]
  },
  argTypes: {
    children: {
      control: {
        disable: true
      }
    }
  }
} as Meta<TextInputRootProps>

export const Default: StoryObj = {}