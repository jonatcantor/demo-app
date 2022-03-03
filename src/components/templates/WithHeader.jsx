import Menu from '../molecules/Menu'
import BackButton from '../atoms/BackButton'
import styled from 'styled-components'

const MainStyles = styled.main`
  display: grid;
  justify-items: center;
  row-gap: 3rem;

  & h2, p {
    font-size: 1rem;
    text-align: center;
  }
`
const HeaderStyles = styled.header`
  margin: 3rem 0;

  & h1, p {
    font-size: 1rem;
    text-align: center;
  }
`

const WithHeader = ({ PageHeader, PageContent }) => {
  return (
    <>
      <HeaderStyles>
        <BackButton />
        { PageHeader }
        <Menu />
      </HeaderStyles>

      <MainStyles>
        { PageContent }
      </MainStyles>
    </>
  )
}

export default WithHeader
