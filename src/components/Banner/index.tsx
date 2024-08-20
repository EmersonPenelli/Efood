import { Imagem, Slogan, LogoMarca } from './styles'
import logo from '../../assets/logo.png'

const Banner = () => (
  <Imagem>
    <LogoMarca src={logo} alt="Logo do efood" />
    <Slogan>Viva experiências gastronômicas no conforto da sua casa</Slogan>
  </Imagem>
)
export default Banner
