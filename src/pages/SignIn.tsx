import { Checkbox } from "@radix-ui/react-checkbox";
import { EnvelopeSimple, LockKey } from "phosphor-react";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { Logo } from "../components/Logo";
import { TextInput } from "../components/TextInput";
import { Text } from '../components/Text'

export function SignIn() {
  return (
    <div className='w-full h-full py-6 bg-linear flex flex-col items-center justify-center'>
      <header className='flex flex-col items-center'>
        <Logo className='mb-6' />
        <Heading size='lg'>NASA Lab</Heading>
        <Text size="lg" className='text-gray-300 mt-1'>Faça login e explore o espaço!</Text>
      </header>
      <form className='w-full max-w-sm mt-10 flex flex-col gap-5'>
        <label htmlFor="email" className='flex flex-col gap-3'>
          <Text size='md' className='font-bold'>Seu endereço de e-mail</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <EnvelopeSimple />
            </TextInput.Icon>
            <TextInput.Input type='email' id='email' placeholder='pedrohenrique@example.com' />
          </TextInput.Root>
        </label>
        <label htmlFor="password" className='flex flex-col gap-3'>
          <Text size='md' className='font-bold'>Sua senha</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <LockKey />
            </TextInput.Icon>
            <TextInput.Input type='password' id='password' placeholder='********' />
          </TextInput.Root>
        </label>
        <label htmlFor="rememberPassword" className='flex items-center gap-2'>
          <Checkbox id='rememberPassword' />
          <Text size='sm' className='font-bold'>Lembrar minha senha</Text>
        </label>
        <Button type='submit'>Ao infinito e além</Button>
      </form>
      <footer className='mt-10 flex flex-col gap-3 items-center'>
        <Text asChild size='sm' className='text-gray-300 underline hover:text-gray-200'>
          <a href="">Esqueceu sua senha?</a>
        </Text>
        <Text asChild size='sm' className='text-gray-300 underline hover:text-gray-200'>
          <a href="">Não possui uma conta? Crie uma agora!</a>
        </Text>
      </footer>
    </div>
  )
}