import styled from "styled-components"
import { BiUser, BiLockAlt } from 'react-icons/bi'

const Styles = styled.form`
  display: grid;
  row-gap: 1rem;
  padding: 0 1rem;

  & label {
    padding: 0.5rem 1rem;
    width: 100%;
    background: #ffffff60;
    display: grid;
    grid-auto-flow: column;
    align-items: center;
    grid-auto-columns: max-content max-content 1fr;
    column-gap: 0.5rem;
    cursor: pointer;
    color: #fff;
  }

  & input, & button {
    font-size: 1rem;
    width: 100%;
    min-width: calc(320px - 2rem);
    padding: 0.5rem;
  }

  & input {
    color: #fff;
    background: none;
  }

  & button {
    margin-top: 1rem;
    padding: 1rem;
    border: none;
    background: #fff;
    cursor: pointer;
  }
`

const LoginForm = () => {
  return (
    <Styles>
      <label>
        <BiUser size='1.5rem' />
        <span>|</span>
        <input type='text' name='username' placeholder='USERNAME' required />
      </label>

      <label>
        <BiLockAlt size='1.5rem' />
        <span>|</span>
        <input type='password' name='password' placeholder='PASSWORD' required />
      </label>

      <button type='submit'>LOG IN</button>
    </Styles>
  )
}

export default LoginForm
