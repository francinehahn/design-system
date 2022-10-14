import React, {useState} from "react"
import axios from "axios"
import { Logo } from "../components/Logo/Logo"
import {GlobalStyle} from '../GlobalStyle'
import {Container} from './style'
import {Heading} from '../components/Heading/Heading'
import {Text} from '../components/Text/Text'
import {Input} from '../components/Input/Input'
import {Checkbox} from '../components/Checkbox/Checkbox'
import {Button} from '../components/Button/Button'


export function Signin () {
    
    const [isUserSignedIn, setIsUserSignedIn] = useState(false)

    async function handleSignin(e) {
        e.preventDefault()
        setIsUserSignedIn(true)

        await axios.post('/sessions', {
            email: 'fran_hahn@hotmsil.com',
            password: '12345678'
        })
    }
    
    return (
        <>
        <GlobalStyle/>

        <Container>
          <header>
            <Logo/>
            <Heading fontSize="lg" text="Ignite Lab"/>
            <Text fontSize="lg" text="Faça login e comece a usar!" color={'var(--grey400)'}/>
          </header>

          <form onSubmit={handleSignin}>
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
    
            {isUserSignedIn && <Text text={'Login realizado!'}/>}

            <Button text="Entrar na plataforma"/>
          </form>
    
          <footer>
            <a href="#">Esqueceu sua senha?</a>
            <a href="#">Não possui conta? Crie uma agora!</a>
          </footer>
        </Container>
        </>
    )
}