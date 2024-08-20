import logo from '../../assets/logo.png'
import { HeaderStyle } from './styles'
import { Branding, LinkRestaurantes, TextCart } from './styles'

type Props = {
  itens: number
}

const Header = ({ itens = 0 }: Props) => (
  <HeaderStyle>
    <LinkRestaurantes href="/">Restaurantes</LinkRestaurantes>
    <Branding src={logo} alt="Logo do restaurante" />
    <TextCart>{itens} produto(s) no carrinho</TextCart>
  </HeaderStyle>
)

export default Header
