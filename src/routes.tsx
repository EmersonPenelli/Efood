import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Perfil from './pages/Perfil'
import Food from './pages/Food'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/perfil" element={<Perfil />} />
    <Route path="/food/:id" element={<Food />} />
  </Routes>
)

export default Rotas
