import { Dimension } from "./dimension"

export interface Vehicle {
    BoxType: string | undefined,
    Brand: string | undefined,
    Model: string | undefined,
    Tension: string | undefined,
    Variation: string | undefined,
    Version: string | undefined,
    ExternalDimensions: Dimension
    InternalDimensions: Dimension
}