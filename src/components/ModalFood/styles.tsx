import styled from 'styled-components'
import { cores } from '../../styles'
import { AddCartButton } from '../Food/styles'

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

export const ModalContent = styled.div`
  max-width: 1024px;
  background-color: ${cores.vermelho};
  padding: 32px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  ${AddCartButton} {
    margin: 0;
  }
`
export const FoodImage = styled.img`
  margin-right: 24px;
  object-fit: cover;
  max-width: 280px;
  widht: 100%;
  max-height: 280px;
  height: 100%;
`
export const ModalContainer = styled.div`
  max-width: 656px;
  width: 100%;
`

export const FoodTitle = styled.h3`
  font-size: 18px;
  font-weight: 900;
  color: ${cores.branco};
  margin-bottom: 16px;
`
export const FoodDescription = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: ${cores.branco};
  line-height: 22px;
  margin-bottom: 16px;
`
export const CloseIcon = styled.img`
  max-width: 16px;
  max-height: 16px;
  width: 100%;
`
