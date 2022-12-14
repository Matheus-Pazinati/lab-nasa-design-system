import { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from "./Text";

export default {
  title: 'Components/Text',
  component: Text,
  args: {
    children: 'Text component',
    size: 'md',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'inline-radio'
      }
    }
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
    children: <p>P Component</p>
  },
  argTypes: {
    children: {
      control: {
        disable: true
      }
    },
    asChild: {
      control: {
        disable: true
      }
    }
  }
}