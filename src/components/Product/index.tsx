import Button from '../Button'
import { Card, Title, Description, Rate, Categories } from './styles'
import Star from '../../assets/estrela.png'

type Props = {
  ProductTitle: string
  ProductRate: number
  ProductDetails: string
  ProductPhoto: string
  ProductCategories: string[]
}

const Product = ({
  ProductTitle,
  ProductRate,
  ProductDetails,
  ProductPhoto,
  ProductCategories
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
    <Button type="link">Saiba mais</Button>
  </Card>
)

export default Product
