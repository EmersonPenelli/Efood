import { AddCartButton } from '../Food/styles'
import pizza from '../../assets/pizza.png'
import close from '../../assets/close 1.png'
import {
  Modal,
  ModalContent,
  FoodImage,
  FoodTitle,
  FoodDescription,
  ModalContainer,
  CloseIcon
} from './styles'

const ModalFood = () => {
  return (
    <>
      <Modal>
        <ModalContent>
          <FoodImage src={pizza} alt="" />
          <ModalContainer>
            <FoodTitle>Pizza Marquerita</FoodTitle>
            <FoodDescription>
              A pizza Margherita é uma pizza clássica da culinária italiana,
              reconhecida por sua simplicidade e sabor inigualável. Ela é feita
              com uma base de massa fina e crocante, coberta com molho de tomate
              fresco, queijo mussarela de alta qualidade, manjericão fresco e
              azeite de oliva extra-virgem. A combinação de sabores é perfeita,
              com o molho de tomate suculento e ligeiramente ácido, o queijo
              derretido e cremoso e as folhas de manjericão frescas, que
              adicionam um toque de sabor herbáceo. É uma pizza simples, mas
              deliciosa, que agrada a todos os paladares e é uma ótima opção
              para qualquer ocasião.
            </FoodDescription>
            <FoodDescription>Serve: de 2 a 3 pessoas</FoodDescription>
            <AddCartButton to={''}>
              Adicionar ao carrinho - R$ 60,90
            </AddCartButton>
          </ModalContainer>
          <CloseIcon src={close} alt="" />
        </ModalContent>
      </Modal>
    </>
  )
}

export default ModalFood
