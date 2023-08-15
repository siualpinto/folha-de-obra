import { configureStore } from '@reduxjs/toolkit';
import formReducer from './features/form/formSlice'

const reducer = {
    formReducer: formReducer
  }

const store = configureStore({
    reducer: reducer
})

// Can still subscribe to the store
store.subscribe(() => console.log(store.getState()))

export default store;