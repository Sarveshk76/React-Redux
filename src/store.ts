import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './features/counterSlice'
import  foodItemsReducer  from './features/foodItems'

export default configureStore({
  reducer: {
    counter: counterSlice, 
    foodItems: foodItemsReducer,
  },
})