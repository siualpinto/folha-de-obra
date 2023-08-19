import { createSlice } from "@reduxjs/toolkit";
import { Order } from "../../../store/model/order/order";
import data from "../../../data/data.json";

const orderInitialState: Order[] = [];

function GetRandomElement(array: string[]) {
  return array[(Math.floor(Math.random() * array.length))];
}

for (let index = 0; index < 20; index++) {
  orderInitialState.push({
    Id: index,
    Client: {
      Name: `TestClient${index}_Name`,
      ContactPerson: `TestClient${index}_ContactPerson`,
      Email: `TestClient${index}_Email`,
      Phone: `TestClient${index}_Phone`,
    },
    Vehicle: {
      BoxType: GetRandomElement(data.BoxTypes),
      Brand: GetRandomElement(data.BrandTypes),
      Model: "ModelX",
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
    TruckPlatform: {
      TruckPlatformType: "",
      TruckBeamType: "",
      TruckTraverseBeamType: "",
      TruckClosingBeamType: "",
      TruckFloorType: "",
      TruckFrameFixturesToChassisType: "",
    },
    CargoTieingSystem: {
      EmbeddedRingsType: "",
      EmbeddedRingsSN: "",
      EmbeddedRingsQuantity: "",
    },
    TruckSides: {
      SideType: "",
      CentralColumns: "",
      RearColumns: "",
      FrontColumns: "",
      SupplementarySidesType: "",
    },
  });
}

const ordersSlice = createSlice({
  name: "orders",
  initialState: {
    value: orderInitialState,
  },
  reducers: {
    addOrder: (state, action) => {
      const order = { ...action.payload } as Order;
      if (!order) return;
      order.Id = Math.round(Math.random() * 100000000000);
      state.value.unshift(order);
    },
    updateOrder: (state, action) => {
      const order = action.payload as Order;
      if (!order) return;
      const index = state.value.findIndex((o) => o.Id == order.Id);
      if (index <= -1) return;
      state.value[index] = order;
    },
  },
});

export const actions = ordersSlice.actions;
export default ordersSlice.reducer;
