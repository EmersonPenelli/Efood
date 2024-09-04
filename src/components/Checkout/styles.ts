import styled from 'styled-components'
import { AddCartButton } from '../Cart/style'
import { cores } from '../../styles'

export const DeliverContainer = styled.div`
  display: none;
  &.show {
    display: block;
  }

  .CEPNumber {
    display: flex;
    column-gap: 34px;
  }

  .buttomContainer {
    margin-top: 24px;
  }

  color: ${cores.rosa};
  h2 {
    font-weight: 700;
    font-size: 16px;
    margin-bottom: 16px;
  }
  label {
    font-weight: 700;
    font-size: 14px;
  }
  &.show {
    display: block;
  }
  ${AddCartButton} {
    margin-top: 8px;
  }
`

export const Field = styled.div`
  display: block;
  width: 100%;
  input {
    width: 100%;
    padding: 8px;
    background-color: ${cores.rosa};
    border: 1px solid ${cores.rosa};
    margin: 8px 0;
  }
`

export const PaymentContainer = styled.div`
  color: ${cores.rosa};
  display: none;
  &.show {
    display: block;
  }
  .buttomContainer {
    margin-top: 24px;
  }
`

export const ConfirmedContainer = styled.div`
  color: ${cores.rosa};
  display: none;
  &.show {
    display: block;
  }
  .buttomContainer {
    margin-top: 24px;
  }
`
