import Footer from '../../components/Footer'
import Hero from '../../components/Hero'
import ProductList from '../../components/ProductList'
import Food from '../../models/Food'
import Hioki from '../../assets/HiokiSushi.png'
import tratoria from '../../assets/tratoria.png'

const food: Food[] = [
  {
    id: 1,
    ProductCategories: ['Destaque do dia', 'Japonesa'],
    ProductDetails:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    ProductPhoto: Hioki,
    ProductTitle: 'Hioki Sushi',
    ProductRate: 4.9,
    ProductToLink: '/perfil'
  },
  {
    id: 2,
    ProductCategories: ['Italiana'],
    ProductDetails:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    ProductPhoto: tratoria,
    ProductTitle: 'La Dolce Vita Trattoria',
    ProductRate: 4.6,
    ProductToLink: '/perfil'
  },
  {
    id: 3,
    ProductCategories: ['Italiana'],
    ProductDetails:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    ProductPhoto: tratoria,
    ProductTitle: 'La Dolce Vita Trattoria',
    ProductRate: 4.6,
    ProductToLink: '/perfil'
  },
  {
    id: 4,
    ProductCategories: ['Italiana'],
    ProductDetails:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    ProductPhoto: tratoria,
    ProductTitle: 'La Dolce Vita Trattoria',
    ProductRate: 4.6,
    ProductToLink: '/perfil'
  },
  {
    id: 5,
    ProductCategories: ['Italiana'],
    ProductDetails:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    ProductPhoto: tratoria,
    ProductTitle: 'La Dolce Vita Trattoria',
    ProductRate: 4.6,
    ProductToLink: '/perfil'
  },
  {
    id: 6,
    ProductCategories: ['Italiana'],
    ProductDetails:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    ProductPhoto: tratoria,
    ProductTitle: 'La Dolce Vita Trattoria',
    ProductRate: 4.6,
    ProductToLink: '/perfil'
  }
]

const Home = () => (
  <>
    <Hero />
    <ProductList foods={food} />
    <Footer />
  </>
)
export default Home
