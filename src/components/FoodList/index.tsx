import FoodModel from '../../models/Food'
import {
  List,
  Container,
  CloseIcon,
  ModalContent,
  FoodDescription,
  FoodImage,
  FoodTitle,
  Modal,
  ModalContainer
} from './styles'
import Food from '../../components/Food'
import pizza from '../../assets/pizza.png'
import { AddCartButton } from '../Food/styles'
import close from '../../assets/close 1.png'
import { useState } from 'react'

export type Props = {
  foods: FoodModel[]
}

const foodSelected: FoodModel = {
  id: 1,
  foodTitle: 'Pizza Marquerita',
  foodDescription:
    'A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabores inigualável. Ela é fit com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.',
  foodPhoto: pizza,
  foodPhotoAlt: 'Pizza marguerita',
  foodServe: 'de 2 a 3 pessoas',
  foodPrice: 60.9
}
const FoodList = ({ foods }: Props) => {
  const [showModal, setShowModal] = useState(false)
  return (
    <>
      <Container>
        <List>
          {foods.map((food) => (
            <li key={food.id} onClick={() => setShowModal(true)}>
              <Food
                key={food.id}
                FoodPhoto={food.foodPhoto}
                FoodTitle={food.foodTitle}
                FoodDescription={food.foodDescription}
                FoodPhotoAlt={food.foodPhotoAlt}
              />
            </li>
          ))}
        </List>
      </Container>
      <Modal className={showModal ? 'visible' : ''}>
        <ModalContent>
          <FoodImage
            src={foodSelected.foodPhoto}
            alt={foodSelected.foodPhotoAlt}
          />
          <ModalContainer>
            <FoodTitle>{foodSelected.foodTitle}</FoodTitle>
            <FoodDescription>
              {foodSelected.foodDescription}
              <p>Serve: {foodSelected.foodServe}</p>
            </FoodDescription>
            <AddCartButton to={''}>
              Adicionar ao carrinho - R$ {foodSelected.foodPrice}
            </AddCartButton>
          </ModalContainer>
          <CloseIcon
            onClick={() => setShowModal(false)}
            src={close}
            alt="Icone de fechar"
          />
        </ModalContent>
        <div onClick={() => setShowModal(false)} className="overlay"></div>
      </Modal>
    </>
  )
}

export default FoodList
