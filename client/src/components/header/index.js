import React from "react"
import { Header } from './styled/header'
import logo from "./.../../../../images/logo.png"

export default function HeaderContainer() {
  // const { theme } = useTheme();

  return (
    <Header.Container>
      <Header.ButtonGroup>
        <Header.Button onPress={() =>{
          const anchor = document.querySelector("#about")
          anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }}>About</Header.Button>
        <Header.Button onClick={() =>{
          const anchor = document.querySelector('#home')
          anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }}>Transact</Header.Button>
        <Header.Button onClick={() =>{
          const anchor = document.querySelector('#home')
          anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }}>
          <img src={logo} alt="logo" style={{
            maxWidth: "35px",
            paddingTop: "20px",
            height: "auto",
            filter: "invert(100%) sepia(0%) saturate(0%) hue-rotate(14deg) brightness(108%) contrast(101%)"
          }} />
        </Header.Button>
        <Header.Button>Markets</Header.Button>
        <Header.Button>Wallets</Header.Button>
      </Header.ButtonGroup>
    </Header.Container>)
}
