import { createSlice } from "@reduxjs/toolkit";
import { Order } from "../../../store/model/order";

export interface Options {
  IsOpen: boolean,
  Mode: Mode
}

export interface FormState {
  Order: Order,
  Options: Options
}
export enum Mode {
  Create,
  Edit,
  View,
}

const formInitialState: FormState = {
  Options: {
    IsOpen: false,
    Mode: Mode.Create
  },
  Order: {
    Id: -1,
    Client: {
      Name: "",
      ContactPerson: "",
      Email: "",
      Phone: "",
    },
    Vehicle: {
      BoxType: "",
      Brand: "",
      Model: "",
      Tension: "",
      Variation: "",
      Version: "",
      ExternalDimensions: {
        Width: "",
        Height: "",
        Length: "",
      },
      InternalDimensions: {
        Width: "",
        Height: "",
        Length: "",
      },
    },
  }
};

const formSlice = createSlice({
  name: "form",
  initialState: {
    value: formInitialState,
  },
  reducers: {
    setInitialState: (state) => {
      state.value = formInitialState;
    },
    setState: (state, action) => {
      state.value = action.payload;
    },
    setIsOpen: (state, action) => {
      state.value.Options.IsOpen = action.payload;
    },
    setClientName: (state, action) => {
      state.value.Order.Client.Name = action.payload;
    },
    setClientContactPerson: (state, action) => {
      state.value.Order.Client.ContactPerson = action.payload;
    },
    setClientEmail: (state, action) => {
      state.value.Order.Client.Email = action.payload;
    },
    setClientPhone: (state, action) => {
      state.value.Order.Client.Phone = action.payload;
    },
    setVehicleBoxType: (state, action) => {
      state.value.Order.Vehicle.BoxType = action.payload;
    },
    setVehicleBrand: (state, action) => {
      state.value.Order.Vehicle.Brand = action.payload;
    },
    setVehicleModel: (state, action) => {
      state.value.Order.Vehicle.Model = action.payload;
    },
    setVehicleTension: (state, action) => {
      state.value.Order.Vehicle.Tension = action.payload;
    },
    setVehicleVariation: (state, action) => {
      state.value.Order.Vehicle.Variation = action.payload;
    },
    setVehicleVersion: (state, action) => {
      state.value.Order.Vehicle.Version = action.payload;
    },
    setVehicleExternalDimensionsLength: (state, action) => {
      state.value.Order.Vehicle.ExternalDimensions.Length = action.payload;
    },
    setVehicleExternalDimensionsHeight: (state, action) => {
      state.value.Order.Vehicle.ExternalDimensions.Height = action.payload;
    },
    setVehicleExternalDimensionsWidth: (state, action) => {
      state.value.Order.Vehicle.ExternalDimensions.Width = action.payload;
    },
    setVehicleInternalDimensionsLength: (state, action) => {
      state.value.Order.Vehicle.InternalDimensions.Length = action.payload;
    },
    setVehicleInternalDimensionsHeight: (state, action) => {
      state.value.Order.Vehicle.InternalDimensions.Height = action.payload;
    },
    setVehicleInternalDimensionsWidth: (state, action) => {
      state.value.Order.Vehicle.InternalDimensions.Width = action.payload;
    },
  },
});

export const actions = formSlice.actions;
export default formSlice.reducer;
