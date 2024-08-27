import { useState } from 'react'
import Food from '../Food'
import { AddCartButton } from '../Food/styles'
import {
  Container,
  List,
  Modal,
  ModalContent,
  FoodImage,
  ModalContainer,
  FoodTitle,
  FoodDescription,
  CloseIcon
} from './styles'
import FoodModel from '../../models/Food'
import close from '../../assets/close 1.png'

export type Props = {
  foods: FoodModel[]
}

const FoodList = ({ foods }: Props) => {
  const [showModal, setShowModal] = useState(false)
  const [foodTitle, setfoodTitle] = useState('')
  const [foodDescription, setfoodDescription] = useState('')
  const [foodPhoto, setfoodPhoto] = useState('')
  const [foodPhotoAlt, setfoodPhotoAlt] = useState('')
  const [foodServe, setfoodServe] = useState('')
  const [foodPrice, setfoodPrice] = useState(0)

  return (
    <>
      <Container>
        <List>
          {foods.map((food) => (
            <li
              key={food.id}
              onClick={() => {
                setShowModal(true)
                setfoodTitle(food.foodTitle)
                setfoodDescription(food.foodDescription)
                setfoodServe(food.foodServe)
                setfoodPrice(food.foodPrice)
                setfoodPhotoAlt(food.foodPhotoAlt)
                setfoodPhoto(food.foodPhoto)
              }}
            >
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
          <FoodImage src={foodPhoto} alt={foodPhotoAlt} />
          <ModalContainer>
            <FoodTitle>{foodTitle}</FoodTitle>
            <FoodDescription>
              {foodDescription}
              <p>Serve: {foodServe}</p>
            </FoodDescription>
            <AddCartButton to={''}>
              Adicionar ao carrinho - R$ {foodPrice}
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
