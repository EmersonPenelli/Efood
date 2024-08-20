import Button from '../Button'
import { Card, Title, Description, Rate, Categories } from './styles'
import Star from '../../assets/estrela.png'

type Props = {
  ProductTitle: string
  ProductRate: number
  ProductDetails: string
  ProductPhoto: string
  ProductCategories: string[]
  ProductToLink: string
}

const Product = ({
  ProductTitle,
  ProductRate,
  ProductDetails,
  ProductPhoto,
  ProductCategories,
  ProductToLink
}: Props) => (
  <Card>
    <img src={ProductPhoto} alt="Hioki sushi" />
    <Categories>
      {ProductCategories.map((info) => (
        <Button key={info}>{info}</Button>
      ))}
    </Categories>
    <div className="ContainerTop">
      <Title>{ProductTitle}</Title>
      <Rate>
        <h3>{ProductRate}</h3>
        <img src={Star} alt="Estrela amarela" />
      </Rate>
    </div>
    <Description>{ProductDetails}</Description>
    <Button type="link" to={ProductToLink}>
      Saiba mais
    </Button>
  </Card>
)

export default Product
