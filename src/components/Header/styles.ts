import styled from 'styled-components'
import fundo from '../../assets/fundoHero.png'
import { cores } from '../../styles'

export const HeaderStyle = styled.header`
  background-image: url(${fundo});
  height: 163px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`
export const Branding = styled.img`
  width: 125px;
  height: 57.5px;
`
export const LinkRestaurantes = styled.a`
  font-size: 18px;
  font-weight: bold;
  text-decoration: none;
  color: ${cores.vermelho};
`

export const TextCart = styled.p`
  font-size: 18px;
  font-weight: bold;
`
