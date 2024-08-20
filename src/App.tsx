import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { GlobalCSS } from './styles'
import Home from '../src/pages/Home'
import Perfil from '../src/pages/Perfil'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/perfil',
    element: <Perfil />
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
