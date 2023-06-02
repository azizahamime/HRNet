import { configureStore } from '@reduxjs/toolkit';
import empSlice from './reducers/employeeReducer';



const store = configureStore({
  reducer: {
    employee: empSlice
  },
  
})
export default store;