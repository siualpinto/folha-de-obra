import { CargoTieingSystem } from "./cargoTieingSystem";
import { Client } from "./client";
import { TruckPlatform } from "./truckPlatform";
import { Vehicle } from "./vehicle";

export interface Order {
  Id: number;
  Client: Client;
  Vehicle: Vehicle;
  TruckPlatform: TruckPlatform;
  CargoTieingSystem: CargoTieingSystem;
}
