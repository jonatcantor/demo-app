import styled from "styled-components"
import BackgroundImage from "../atoms/BackgroundImage"
import Logo from "../atoms/Logo"
import LoginForm from "../organisms/LoginForm"

const Styles = styled.main`
  position: relative;
  width: 100vw;
  height: 100vh;

  display: grid;
  row-gap: 4rem;
  grid-auto-rows: min-content;
  align-content: center;
  justify-items: center;
`

const Login = () => {
  return (
    <Styles>
      <BackgroundImage width='100%' height='100%' url='./images/fox.gif' />
      <Logo />
      <LoginForm />
    </Styles>
  )
}

export default Login
