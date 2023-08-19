import { createSlice } from "@reduxjs/toolkit";
import { Order } from "../../../store/model/order/order";

export interface Options {
  IsOpen: boolean;
  Mode: Mode;
  SelectedTab?: string;
}

export interface FormState {
  Order: Order;
  Options: Options;
}
export enum Mode {
  Create,
  Edit,
  View,
}

const formInitialState: FormState = {
  Options: {
    IsOpen: false,
    Mode: Mode.Create,
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
  },
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
    SetSelectTab: (state, action) => {
      state.value.Options.SelectedTab = action.payload;
    },
    setIsOpen: (state, action) => {
      state.value.Options.IsOpen = action.payload;
    },
    setMode: (state, action) => {
      state.value.Options.Mode = action.payload;
    },
    setClient: (state, action) => {
      state.value.Order.Client = action.payload;
    },
    setVehicle: (state, action) => {
      state.value.Order.Vehicle = action.payload;
    },
    setVehicleExternalDimensions: (state, action) => {
      state.value.Order.Vehicle.ExternalDimensions = action.payload;
    },
    setVehicleInternalDimensions: (state, action) => {
      state.value.Order.Vehicle.InternalDimensions = action.payload;
    },
    setTruckPlatform: (state, action) => {
      state.value.Order.TruckPlatform = action.payload;
    },
    setCargoTieingSystem: (state, action) => {
      state.value.Order.CargoTieingSystem = action.payload;
    },
    setTruckSides: (state, action) => {
      state.value.Order.TruckSides = action.payload;
    },
  },
});

export const actions = formSlice.actions;
export default formSlice.reducer;
