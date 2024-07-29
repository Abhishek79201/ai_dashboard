import { configureStore } from '@reduxjs/toolkit'
import chatReducer from './slices/chatSlice'
import navReducer from './slices/navSlice'
export const store = configureStore({
  reducer: {
    chat: chatReducer,
    navigation: navReducer
  },
})