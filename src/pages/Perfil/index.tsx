import { useParams } from 'react-router-dom'
import Header from '../../components/Header'
import Apresentacao from '../../components/Apresentacao'
import FoodList from '../../components/FoodList'
import Footer from '../../components/Footer'
import { useGetRestaurantSelectedQuery } from '../../services/api'
import Cart from '../../components/Cart'
import Loader from '../../components/Loader'

type RestaurantParams = {
  id: string
}

const Perfil = () => {
  const { id } = useParams() as RestaurantParams
  const { data: restaurantFood } = useGetRestaurantSelectedQuery(id)

  if (!restaurantFood) {
    return <h3>Loading...</h3>
  }
  return (
    <>
      <Header itens={0} />
      <Apresentacao restaurant={restaurantFood} />
      <FoodList restaurant={restaurantFood} />
      <Footer />
    </>
  )
}

export default Perfil
