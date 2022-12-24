import { createSlice } from '@reduxjs/toolkit'

const initialState={
    products: []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {

    addToCart: (state, action) => {
      return {products: [...state.products, {...action.payload, amount: 1}]}
    },

    clearCart: (state) => {
        return {products: []}
    },

    incrementProductAmount: (state, action) => {
        return {products: state.products.map(product => product.name===action.payload.name ? {...product, amount: product.amount + 1}: product)}
    },

    decrementProductAmount: (state, action) => {
        return {products: state.products.map(product => product.name===action.payload.name ? {...product, amount: product.amount - 1}: product)}
    },

  }
})

export const cartProducts = state => state.cart.products

// Action creators are generated for each case reducer function
export const { addToCart, clearCart, incrementProductAmount, decrementProductAmount } = cartSlice.actions

export default cartSlice.reducer