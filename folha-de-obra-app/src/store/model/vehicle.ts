import { Dimension } from "./dimension";

export interface Vehicle {
  BoxType: string;
  Brand: string;
  Model: string;
  Tension: string;
  Variation: string;
  Version: string;
  ExternalDimensions: Dimension;
  InternalDimensions: Dimension;
}
