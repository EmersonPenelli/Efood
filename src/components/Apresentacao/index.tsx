import {
  ApresentacaoContainer,
  ApresentacaoCategoria,
  ApresentacaoPrato
} from './styles'
import { Restaurant } from '../../pages/Home'

export type Props = {
  // type: string
  // name: string
  // image: string
  restaurant: Restaurant
}
const Apresentacao = ({ restaurant }: Props) => (
  <ApresentacaoContainer style={{ backgroundImage: `url(${restaurant.capa})` }}>
    <div className="container">
      <ApresentacaoCategoria>{restaurant.tipo}</ApresentacaoCategoria>
      <ApresentacaoPrato>{restaurant.titulo}</ApresentacaoPrato>
    </div>
  </ApresentacaoContainer>
)

export default Apresentacao
