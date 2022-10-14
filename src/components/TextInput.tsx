import { InputHTMLAttributes, ReactNode } from "react";
import { Slot } from '@radix-ui/react-slot';

export interface TextInputRootProps {
  children: ReactNode
}

function TextInputRoot({ children }: TextInputRootProps) {
  return (
    <div className="flex items-center gap-2 bg-gray-800 py-3 px-3 w-full rounded focus-within:ring-2 ring-blue-500">
      {children}
    </div>
  )
}

export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> {}

function TextInputInput(props: TextInputInputProps) {
  return (
    <input {...props}
      className="flex-1 bg-transparent text-gray-100 font-normal text-xs outline-none placeholder:text-gray-300"
    />
  )
}

interface TextInputIconProps {
  children: ReactNode
}

function TextInputIcon({ children }: TextInputIconProps) {
  return (
    <Slot className="w-6 h-6 text-gray-300">
      {children}
    </Slot>
  )
}

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon
}

TextInputRoot.displayName = "TextInput.Root"
TextInputInput.displayName = "TextInput.Input"
TextInputIcon.displayName = "TextInput.Icon"