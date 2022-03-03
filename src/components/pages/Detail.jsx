import styled from "styled-components"
import BackButton from "../atoms/BackButton"

const DetailPage = styled.main`
  display: grid;
  justify-items: center;
  row-gap: 3rem;

  & header {
    margin-top: 3rem;
  }

  & h1, h2, p {
    font-size: 1rem;
    text-align: center;
  }
`

const DetailMovie = styled.section`
  display: grid;
  row-gap: 2rem;

  & h2 {
    margin-bottom: 0.5rem;
  }

  & ul {
    list-style: none;
  }

  & li {
    margin-bottom: 0.25rem;
  }
`

const Characters = styled.section`
  display: grid;
  row-gap: 1rem;
  width: 80%;
  max-width: 80%;
  overflow-x: scroll;
  justify-items: center;
  padding-bottom: 1rem;

  & table {
    width: 100%;
    border-collapse: collapse;
    box-shadow: 0 0.15rem 0.25rem 0 #4e4e4e;

    & td, th {
      border: solid thin #aaaaaa;
      padding: 0.5rem;
      text-align: center;
    }
  }
`

const Detail = () => {
  return (
    <DetailPage>
      <BackButton />

      <header>
        <h1>Detail's Movies</h1>
      </header>

      <DetailMovie>
        <div>
          <h2>Nombre</h2>
          <p>Nombre de película</p>
        </div>

        <div>
          <h2>Director</h2>
          <p>Director 1</p>
        </div>

        <ul>
          <h2>Productor</h2>
          <li>Productor 1</li>
          <li>Productor 2</li>
        </ul>

        <div>
          <h2>Opening</h2>
          <p>Opening 1</p>
        </div>
      </DetailMovie>

      <Characters>
        <h2>Characters</h2>
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Homeworld - name</th>
              <th>hair_color</th>
              <th>Height</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Nombre 1</td>
              <td>Homeworld 1</td>
              <td>hair_color 1</td>
              <td>Height 1</td>
            </tr>
          </tbody>
        </table>
      </Characters>
    </DetailPage>
  )
}

export default Detail
