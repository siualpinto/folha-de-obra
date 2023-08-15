import { createSlice } from "@reduxjs/toolkit";
import { Order } from "../../model/order";

const orderInitialState: Order = {
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
};

const formSlice = createSlice({
  name: "form",
  initialState: {
    value: orderInitialState,
  },
  reducers: {
    setClientName: (state, action) => {
      state.value.Client.Name = action.payload;
    },
    setClientContactPerson: (state, action) => {
      state.value.Client.ContactPerson = action.payload;
    },
    setClientEmail: (state, action) => {
      state.value.Client.Email = action.payload;
    },
    setClientPhone: (state, action) => {
      state.value.Client.Phone = action.payload;
    },
    setVehicleBoxType: (state, action) => {
      state.value.Vehicle.BoxType = action.payload;
    },
    setVehicleBrand: (state, action) => {
      state.value.Vehicle.Brand = action.payload;
    },
    setVehicleModel: (state, action) => {
      state.value.Vehicle.Model = action.payload;
    },
    setVehicleTension: (state, action) => {
      state.value.Vehicle.Tension = action.payload;
    },
    setVehicleVariation: (state, action) => {
      state.value.Vehicle.Variation = action.payload;
    },
    setVehicleVersion: (state, action) => {
      state.value.Vehicle.Version = action.payload;
    },
    setVehicleExternalDimensionsLength: (state, action) => {
      state.value.Vehicle.ExternalDimensions.Length = action.payload;
    },
    setVehicleExternalDimensionsHeight: (state, action) => {
      state.value.Vehicle.ExternalDimensions.Height = action.payload;
    },
    setVehicleExternalDimensionsWidth: (state, action) => {
      state.value.Vehicle.ExternalDimensions.Width = action.payload;
    },
    setVehicleInternalDimensionsLength: (state, action) => {
      state.value.Vehicle.InternalDimensions.Length = action.payload;
    },
    setVehicleInternalDimensionsHeight: (state, action) => {
      state.value.Vehicle.InternalDimensions.Height = action.payload;
    },
    setVehicleInternalDimensionsWidth: (state, action) => {
      state.value.Vehicle.InternalDimensions.Width = action.payload;
    },
  },
});

export const actions = formSlice.actions;
export default formSlice.reducer;
