import { configureStore } from '@reduxjs/toolkit'
import counterSlice from '../feature/counterSlice'
import  foodItemsReducer  from '../feature/foodItems'

export default configureStore({
  reducer: {
    counter: counterSlice, 
    foodItems: foodItemsReducer,
  },
})