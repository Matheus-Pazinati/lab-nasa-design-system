import { Heading } from './components/Heading'
import { Logo } from './components/Logo'
import { Text } from './components/Text'
import './styles/main.css'

export function App() {
  return (
    <div className='w-screen h-screen bg-linear flex flex-col items-center justify-center'>
      <header className='flex flex-col items-center'>
        <Logo className='mb-6' />
        <Heading size='lg'>NASA Lab</Heading>
        <Text size="lg" className='text-gray-300 mt-1'>Faça login e explore o espaço!</Text>
      </header>
    </div>
  )
}
