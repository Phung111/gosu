import { configureStore } from '@reduxjs/toolkit'

import baseSlice from 'service/baseSlice'

const store = configureStore({
  reducer: {
    baseSlice: baseSlice,
  },
})

export default store
