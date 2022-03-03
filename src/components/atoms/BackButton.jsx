import { IoChevronBack } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const Styles = styled.button`
  line-height: 0;
  position: absolute;
  top: calc(3rem - 0.5rem);
  left: 3rem;
`

const BackButton = () => {
  const navigate = useNavigate()

  return (
    <Styles onClick={ () => navigate(-1) }><IoChevronBack size='2rem' /></Styles>
  )
}

export default BackButton
