import Perfil from '../Perfil'
import { useParams } from 'react-router-dom'

const Food = () => {
  const { id } = useParams()
  return (
    <>
      <Perfil />
      <h1>Prato id: {id}</h1>
    </>
  )
}

export default Food
