import { configureStore } from '@reduxjs/toolkit';
import formReducer from '../components/features/createOrder/formSlice'
import ordersReducer from '../components/features/pageOrders/ordersSlice';

const reducer = {
  formReducer: formReducer,
  ordersReducer: ordersReducer
}

const store = configureStore({
  reducer: reducer
})

// Can still subscribe to the store
store.subscribe(() => console.log(store.getState()))

export default store;