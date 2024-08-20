import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { GlobalCSS } from './styles'
import Hero from './components/Hero'
import ProductList from './components/ProductList'
import Footer from './components/Footer'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Hero />
        <ProductList />
        <Footer />
      </>
    )
  }
])

function App() {
  return (
    <>
      <GlobalCSS />
      <RouterProvider router={rotas} />
    </>
  )
}

export default App
