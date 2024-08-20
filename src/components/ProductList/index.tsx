import Product from '../Product'
import { Container, List } from './styles'
import Food from '../../models/Food'

export type Props = {
  foods: Food[]
}

const ProductList = ({ foods }: Props) => (
  <Container>
    <List>
      {foods.map((food) => (
        <Product
          key={food.id}
          ProductTitle={food.ProductTitle}
          ProductRate={food.ProductRate}
          ProductDetails={food.ProductDetails}
          ProductPhoto={food.ProductPhoto}
          ProductCategories={food.ProductCategories}
          ProductToLink={food.ProductToLink}
        />
      ))}
    </List>
  </Container>
)

export default ProductList
