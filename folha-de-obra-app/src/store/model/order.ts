import { Client } from "./client";
import { Vehicle } from "./vehicle";

export interface Order {
  Client: Client;
  Vehicle: Vehicle;
}
