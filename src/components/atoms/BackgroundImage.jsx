import styled from "styled-components"

const BackgroundImage = styled.div`
  position: absolute;
  width: ${ props => props.width };
  height: ${ props => props.height };
  background: url(${ props => props.url }) no-repeat center center;
  background-size: cover;
  z-index: -1;
`

export default BackgroundImage
