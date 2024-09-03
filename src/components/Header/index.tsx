import logo from '../../assets/logo.png'
import { HeaderStyle } from './styles'
import { Branding, LinkRestaurantes, TextCart } from './styles'
import { open } from '../../store/reducers/cart'
import { useDispatch } from 'react-redux'

type Props = {
  itens: number
}

const Header = ({ itens = 0 }: Props) => {
  const dispatch = useDispatch()
  const openCart = () => {
    dispatch(open())
  }
  return (
    <HeaderStyle>
      <div className="container">
        <LinkRestaurantes href="/">Restaurantes</LinkRestaurantes>
        <Branding src={logo} alt="Logo do restaurante" />
        <TextCart onClick={openCart}>{itens} produto(s) no carrinho</TextCart>
      </div>
    </HeaderStyle>
  )
}

export default Header
