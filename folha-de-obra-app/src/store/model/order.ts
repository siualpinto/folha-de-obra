import { Client } from "./client";
import { Vehicle } from "./vehicle";

export interface Order {
  Id: string;
  Client: Client;
  Vehicle: Vehicle;
}
