import { Restaurant, Food } from './../../pages/Home/index'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type CartState = {
  items: Restaurant[]
  food: Food[]
  isOpen: boolean
}

const initialState: CartState = {
  items: [],
  food: [],
  isOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Restaurant>) => {
      state.items.push(action.payload)
    },
    addFood: (state, action: PayloadAction<Food>) => {
      state.food.push(action.payload)
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    }
  }
})

export const { add, open, close, addFood } = cartSlice.actions
export default cartSlice.reducer
