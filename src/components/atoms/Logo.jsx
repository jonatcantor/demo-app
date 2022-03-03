import styled from "styled-components"

const Styles = styled.div`
  display: grid;
  row-gap: 1rem;
  justify-items: center;

  & img {
    max-width: 150px;
    max-height: 150px;
    width: 80%;
    height: auto;
  }

  & h1 {
    text-transform: uppercase;
    color: #fff;
    text-align: center;
  }

`

const Logo = () => {
  return (
    <Styles>
      <img src='./logo300.png' alt='Demo app logo' />
      <h1>Demo APP</h1>
    </Styles>
  )
}

export default Logo
