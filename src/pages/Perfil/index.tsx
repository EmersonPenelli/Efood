import Header from '../../components/Header'
import Apresentacao from '../../components/Apresentacao'
import FoodList from '../../components/FoodList'
import Footer from '../../components/Footer'
import FoodModel from '../../models/Food'
import pizza from '../../assets/pizza.png'

interface Food extends FoodModel {
  ProductTitle: string
  ProductRate: number
  ProductPhoto: string
  ProductToLink: string
  // Add any other missing properties here
}

const foods: Food[] = [
  {
    id: 1,
    foodTitle: 'Pizza Marguerita',
    foodDescription:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    foodPhoto: pizza,
    foodPhotoAlt: 'Pizza marguerita',
    ProductTitle: 'Pizza Marguerita',
    ProductRate: 4.5,
    ProductPhoto: pizza,
    ProductToLink: '/pizza-marguerita',
    ProductCategories: [],
    ProductDetails: ''
  },
  {
    id: 2,
    foodTitle: 'Pizza Marguerita',
    foodDescription:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    foodPhoto: pizza,
    foodPhotoAlt: 'Pizza marguerita',
    ProductTitle: 'Pizza Marguerita',
    ProductRate: 4.5,
    ProductPhoto: pizza,
    ProductToLink: '/pizza-marguerita',
    ProductCategories: [],
    ProductDetails: ''
  },
  {
    id: 3,
    foodTitle: 'Pizza Marguerita',
    foodDescription:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    foodPhoto: pizza,
    foodPhotoAlt: 'Pizza marguerita',
    ProductTitle: 'Pizza Marguerita',
    ProductRate: 4.5,
    ProductPhoto: pizza,
    ProductToLink: '/pizza-marguerita',
    ProductCategories: [],
    ProductDetails: ''
  },
  {
    id: 4,
    foodTitle: 'Pizza Marguerita',
    foodDescription:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    foodPhoto: pizza,
    foodPhotoAlt: 'Pizza marguerita',
    ProductTitle: 'Pizza Marguerita',
    ProductRate: 4.5,
    ProductPhoto: pizza,
    ProductToLink: '/pizza-marguerita',
    ProductCategories: [],
    ProductDetails: ''
  },
  {
    id: 5,
    foodTitle: 'Pizza Marguerita',
    foodDescription:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    foodPhoto: pizza,
    foodPhotoAlt: 'Pizza marguerita',
    ProductTitle: 'Pizza Marguerita',
    ProductRate: 4.5,
    ProductPhoto: pizza,
    ProductToLink: '/pizza-marguerita',
    ProductCategories: [],
    ProductDetails: ''
  },
  {
    id: 6,
    foodTitle: 'Pizza Marguerita',
    foodDescription:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    foodPhoto: pizza,
    foodPhotoAlt: 'Pizza marguerita',
    ProductTitle: 'Pizza Marguerita',
    ProductRate: 4.5,
    ProductPhoto: pizza,
    ProductToLink: '/pizza-marguerita',
    ProductCategories: [],
    ProductDetails: ''
  }
]

const Perfil = () => (
  <>
    <Header itens={0} />
    <Apresentacao />
    <FoodList foods={foods} />
    <Footer />
  </>
)

export default Perfil
