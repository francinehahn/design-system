import React from "react"
import { Logo } from "./components/Logo/Logo"
import {Container, GlobalStyle} from './GlobalStyle'
import {Heading} from './components/Heading/Heading'
import {Text} from './components/Text/Text'
import {Input} from './components/Input/Input'
import {Checkbox} from './components/Checkbox/Checkbox'
import {Button} from './components/Button/Button'

function App() {
  return (
    <Container>
      <GlobalStyle/>
      <header>
        <Logo/>
        <Heading fontSize="lg" text="Ignite Lab"/>
        <Text fontSize="lg" text="Faça login e comece a usar!" color={'var(--grey400)'}/>
      </header>

      <form>
        <label htmlFor="email">
          <Text text="Endereço de e-mail"/>
          <Input type="email" placeholder="Digite seu e-mail" id="email" icon="email"/>
        </label>

        <label htmlFor="password">
          <Text text="Sua senha"/>
          <Input type="password" placeholder="********" id="password"/>
        </label>

        <label htmlFor="checkbox">
          <Checkbox id="checkbox"/>
          <Text text="Lembrar de mim por 30 dias" fontSize="sm" color="var(--grey200)"/>
        </label>

        <Button text="Entrar na plataforma"/>
      </form>

      <footer>
        <a href="#">Esqueceu sua senha?</a>
        <a href="#">Não possui conta? Crie uma agora!</a>
      </footer>
    </Container>
  )
}

export default App
