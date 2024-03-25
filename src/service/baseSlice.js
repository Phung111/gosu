import { createSlice } from '@reduxjs/toolkit'

const namespace = 'baseSlice'

const initialState = {
  data: {
    bestProduct: {},
    newProducts: [],
    products: [],
    product: {},
    loading: true,
    currentImage: null,
  },
}

const baseSlice = createSlice({
  name: namespace,
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.data.products = action.payload

      const bestProductID = 0
      state.data.bestProduct = state.data.products.find((product) => product.id === bestProductID) || {}

      state.data.newProducts = state.data.products.slice(0, 3)
    },
    setProduct: (state, action) => {
      const productId = action.payload
      let productCurrent = state.data.products.find((product) => product.id === productId) || {}
      state.data.product = productCurrent
      state.data.currentImage = productCurrent.colors[0].img
      localStorage.setItem('product', JSON.stringify(state.data.product))
    },
    setLoading: (state, action) => {
      state.data.loading = action.payload
    },
    setCurrentImage: (state, action) => {
      state.data.currentImage = action.payload
    },
  },
  extraReducers(builder) {},
})

const { reducer, actions } = baseSlice

export const { setBestProducts, setNewProducts, setProducts, setProduct, setLoading, setCurrentImage } = actions

export default reducer
