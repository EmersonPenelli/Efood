import { useDispatch, useSelector } from 'react-redux'
import { AddCartButton } from '../Cart/style'
import {
  DeliverContainer,
  Field,
  PaymentContainer,
  ConfirmedContainer
} from './styles'
import {
  backtoCart,
  payment,
  confirmed,
  startCheckout,
  closeAndFinish
} from '../../store/reducers/cart'
import { RootReducer } from '../../store'

type Props = {
  checkoutStart?: boolean
}

const Checkout = ({ checkoutStart = false }: Props) => {
  const { isPayment, isConfirmed } = useSelector(
    (state: RootReducer) => state.cart
  )
  const dispatch = useDispatch()

  const finish = () => {
    dispatch(closeAndFinish())
  }
  const backCart = () => {
    dispatch(backtoCart())
  }
  const backAdress = () => {
    dispatch(startCheckout())
  }
  const activePayment = () => {
    dispatch(payment())
  }
  const activeConfirmed = () => {
    dispatch(confirmed())
  }
  console.log(checkoutStart)
  return (
    <>
      <DeliverContainer className={checkoutStart ? 'show' : ''}>
        <h2>Entrega</h2>
        <Field>
          <label htmlFor="remetente">Quem irá receber</label>
          <input type="text" required id="remetente" />
        </Field>
        <Field>
          <label htmlFor="endereco">Endereço</label>
          <input type="text" required id="endereco" />
        </Field>
        <Field>
          <label htmlFor="cidade">Cidade</label>
          <input type="text" required id="cidade" />
        </Field>
        <div className="CEPNumber">
          <Field>
            <label htmlFor="cep">CEP</label>
            <input type="text" required id="cep" />
          </Field>
          <Field>
            <label htmlFor="numero">Número</label>
            <input type="text" required id="numero" />
          </Field>
        </div>
        <Field>
          <label htmlFor="complemento">Complemento (opcional)</label>
          <input type="text" id="complemento" />
        </Field>
        <div className="buttomContainer">
          <AddCartButton onClick={activePayment}>
            Continuar com o pagamento
          </AddCartButton>
          <AddCartButton onClick={backCart}>Voltar ao carrinho</AddCartButton>
        </div>
      </DeliverContainer>
      <PaymentContainer className={isPayment ? 'show' : ''}>
        <div className="buttomContainer">
          <AddCartButton onClick={activeConfirmed}>
            Finalizar pagamento
          </AddCartButton>
        </div>
        <div className="buttomContainer">
          <AddCartButton onClick={backAdress}>
            Voltar para a edição do endereço
          </AddCartButton>
        </div>
      </PaymentContainer>
      <ConfirmedContainer className={isConfirmed ? 'show' : ''}>
        <p>
          Estamos felizes em informar que seu pedido já está em processo de
          preparação e, em breve, será entregue no endereço fornecido.
          Gostaríamos de ressaltar que nossos entregadores não estão autorizados
          a realizar cobranças extras. Lembre-se da importância de higienizar as
          mãos após o recebimento do pedido, garantindo assim sua segurança e
          bem-estar durante a refeição. Esperamos que desfrute de uma deliciosa
          e agradável experiência gastronômica. Bom apetite!
        </p>
        <div className="buttomContainer">
          <AddCartButton onClick={finish}>Concluir</AddCartButton>
        </div>
      </ConfirmedContainer>
    </>
  )
}

export default Checkout
