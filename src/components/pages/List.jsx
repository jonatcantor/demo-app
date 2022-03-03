import { useState } from 'react'
import { Navigate } from 'react-router-dom'
import styled from 'styled-components'
import Menu from '../organisms/Menu'

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  box-shadow: 0 0.15rem 0.25rem 0 #4e4e4e;
  cursor: pointer;

  & td, th {
    border: solid thin #aaaaaa;
    padding: 0.5rem;
    text-align: center;
  }

  & td:first-child {
    width: max-content;
  }

  & td:last-child {
    width: 100%;
  }
`

const MovieList = styled.ul`
  width: 80%;
  max-width: 80%;
  display: grid;
  row-gap: 2rem;
  justify-items: center;
  overflow-x: scroll;
  padding: 1rem 0;
`

const ListPage = styled.main`
  display: grid;
  justify-items: center;
  row-gap: 3rem;

  & header {
    margin-top: 3rem;
  }

  & h1, p {
    font-size: 1rem;
    text-align: center;
  }
`

const List = () => {
  const [pressed, setPressed] = useState(false)

  if(pressed) {
    return <Navigate to='/detail/1' />
  }

  return (
    <ListPage>
      <Menu />

      <header>
        <h1>Name's Movies</h1>
        <p>User since Date</p>
      </header>

      <MovieList>
        <Table onClick={ () => setPressed(true) }>
          <tbody>
            <tr>
              <th>Title</th>
              <td>Title 1</td>
            </tr>
            <tr>
              <th>Director</th>
              <td>Director 1</td>
            </tr>
            <tr>
              <th>Opening</th>
              <td>Opening 1</td>
            </tr>
          </tbody>
        </Table>

        <Table onClick={ () => setPressed(true) }>
          <tbody>
            <tr>
              <th>Title</th>
              <td>Title 2</td>
            </tr>
            <tr>
              <th>Director</th>
              <td>Director 2</td>
            </tr>
            <tr>
              <th>Opening</th>
              <td>Opening 2</td>
            </tr>
          </tbody>
        </Table>
      </MovieList>
    </ListPage>
  )
}

export default List
