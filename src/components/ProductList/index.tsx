import Product from '../Product'
import { Container, List } from './styles'
import HiokiSushi from '../../assets/HiokiSushi.png'
import Tratoria from '../../assets/tratoria.png'

const ProductList = () => (
  <Container>
    <List>
      <Product
        ProductTitle={'Hioki Sushi'}
        ProductRate={4.9}
        ProductDetails={
          'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!'
        }
        ProductPhoto={HiokiSushi}
        ProductCategories={['Destaque da semana', 'Japonesa']}
      />
      <Product
        ProductTitle={'La Dolce Vita Tratoria'}
        ProductRate={4.6}
        ProductDetails={
          'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
        }
        ProductPhoto={Tratoria}
        ProductCategories={['Italiana']}
      />
      <Product
        ProductTitle={'La Dolce Vita Tratoria'}
        ProductRate={4.6}
        ProductDetails={
          'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
        }
        ProductPhoto={Tratoria}
        ProductCategories={['Italiana']}
      />
      <Product
        ProductTitle={'La Dolce Vita Tratoria'}
        ProductRate={4.6}
        ProductDetails={
          'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
        }
        ProductPhoto={Tratoria}
        ProductCategories={['Italiana']}
      />
      <Product
        ProductTitle={'La Dolce Vita Tratoria'}
        ProductRate={4.6}
        ProductDetails={
          'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
        }
        ProductPhoto={Tratoria}
        ProductCategories={['Italiana']}
      />
      <Product
        ProductTitle={'La Dolce Vita Tratoria'}
        ProductRate={4.6}
        ProductDetails={
          'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
        }
        ProductPhoto={Tratoria}
        ProductCategories={['Italiana']}
      />
    </List>
  </Container>
)

export default ProductList
