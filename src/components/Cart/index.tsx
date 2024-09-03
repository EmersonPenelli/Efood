import { useDispatch, useSelector } from 'react-redux'
import pizza from '../../assets/pizza.png'
import {
  Overlay,
  CartContainer,
  AddCartButton,
  Sidebar,
  ItemCart,
  ImageItem,
  InfosItem,
  DeleteItemButton,
  InfosCart
} from './style'
import { RootReducer } from '../../store'
import { close } from '../../store/reducers/cart'

const Cart = () => {
  const { isOpen } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()
  const openCart = () => {
    dispatch(close())
  }
  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={openCart} />
      <Sidebar>
        <div>
          <ul>
            <ItemCart>
              <ImageItem src={pizza} alt="" />
              <InfosItem>
                <h3>Pizza Marguerita</h3>
                <span>R$ 60,90</span>
              </InfosItem>
              <DeleteItemButton type="button" />
            </ItemCart>
            <ItemCart>
              <ImageItem src={pizza} alt="" />
              <InfosItem>
                <h3>Pizza Marguerita</h3>
                <span>R$ 60,90</span>
              </InfosItem>
              <DeleteItemButton type="button" />
            </ItemCart>
            <ItemCart>
              <ImageItem src={pizza} alt="" />
              <InfosItem>
                <h3>Pizza Marguerita</h3>
                <span>R$ 60,90</span>
              </InfosItem>
              <DeleteItemButton type="button" />
            </ItemCart>
          </ul>
          <InfosCart>
            <p>Valor total</p>
            <span>R$ 182,70</span>
          </InfosCart>
          <AddCartButton>Continuar com a entrega</AddCartButton>
        </div>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
