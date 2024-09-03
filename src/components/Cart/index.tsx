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
const Cart = () => {
  return (
    <CartContainer>
      <Overlay />
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
