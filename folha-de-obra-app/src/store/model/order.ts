import { Client } from "./client";
import { Vehicle } from "./vehicle";

export interface Order {
  Id: number;
  Client: Client;
  Vehicle: Vehicle;
}
