import { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from "./Text";

export default {
  title: 'Components/Text',
  component: Text,
  args: {
    children: 'Text',
    size: 'md',
  }
} as Meta<TextProps>

export const Default: StoryObj<TextProps> = {
  args: {
    size: 'md'
  }
}
export const Small: StoryObj<TextProps> = {
  args: {
    size: 'sm'
  }
}
export const Large: StoryObj<TextProps> = {
  args: {
    size: 'lg'
  }
}

export const CustomComponent: StoryObj<TextProps> = {
  args: {
    size: 'md',
    asChild: true,
    children: <p>Paragraph Test</p>
  }
}