import { useState } from "react"
import styled from "styled-components"
import { IoMenu } from 'react-icons/io5'

const MenuBox = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  min-height: 100vh;
  min-width: 320px;
  padding: calc(3rem + 3rem) 3rem 1rem 3rem;
  background: #333;
`

const MenuButton = styled.button`
  position: absolute;
  right: 3rem;
  top: calc(3rem - 0.5rem);
`

const SignOutButton = styled.button`
  color: #fff;
  font-size: 1rem;
`

const Menu = () => {
  const [pressed, setPressed] = useState(false)

  return (
    <>
      {
        pressed &&

        <MenuBox>
          <SignOutButton>Sign out</SignOutButton>
        </MenuBox>
      }

      <MenuButton onClick={ () => setPressed(currentState => !currentState) }><IoMenu size='2rem' /></MenuButton>
    </>
  )
}

export default Menu
