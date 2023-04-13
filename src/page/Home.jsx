import styled from 'styled-components'
import LogoNike from '../assets/nike-logo.jpg'

export const Navigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  height: 70px;
  background-color: #fe0002;

  img {
   height: 50px; 
  }

  ul {
    display: flex;
    list-style: none;
    margin-left: 700px;

    li {
      margin-right: 10px;

      a {
        color: black;
        font-weight: 600;
        text-decoration: none;
      }
    }
  }
`

export default function Home() {
  return (
    <Navigation>
      <img src={LogoNike} alt="" />

      <ul>
        <li><a href="">Home</a></li>
        <li><a href="">Contato</a></li>
        <li><a href="">Sobre</a></li>
      </ul>
    </Navigation>
  )
}