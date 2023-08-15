import { createSlice } from '@reduxjs/toolkit';
import { Order } from '../../model/order';

const initialState: Order = {
    Client: {}
}

const formSlice = createSlice({
    name: 'form',
    initialState: {
        value: initialState
    },
    reducers: {
        setClientName: (state, action) => {
            state.value.Client.Name = action.payload
        },
        setClientContactPerson: (state, action) => {
            state.value.Client.ContactPerson = action.payload
        },
        setClientEmail: (state, action) => {
            state.value.Client.Email = action.payload
        },
        setClientPhone: (state, action) => {
            state.value.Client.Phone = action.payload
        }
    }
})

export const actions = formSlice.actions
export default formSlice.reducer;