import { createSlice } from "@reduxjs/toolkit";
import { Order } from "../../../store/model/order";

const orderInitialState: Order[] = []

for (let index = 0; index < 10; index++) {
  orderInitialState.push({
    Id: `${index}`,
    Client: {
      Name: `TestClient${index}_Name`,
      ContactPerson: `TestClient${index}_ContactPerson`,
      Email: `TestClient${index}_Email`,
      Phone: `TestClient${index}_Phone`,
    },
    Vehicle: {
      BoxType: "",
      Brand: "",
      Model: "",
      Tension: "",
      Variation: "",
      Version: "",
      ExternalDimensions: {
        Width: "1",
        Height: "2",
        Length: "3",
      },
      InternalDimensions: {
        Width: "4",
        Height: "5",
        Length: "6",
      },
    },
  });
}

const ordersSlice = createSlice({
  name: "orders",
  initialState: {
    value: orderInitialState,
  },
  reducers: {
    // setClientName: (state, action) => {
    //   state.value.Client.Name = action.payload;
    // },
  },
});

export const actions = ordersSlice.actions;
export default ordersSlice.reducer;