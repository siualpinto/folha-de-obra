import {
  FormPropType,
  InputProp,
  SelectProp,
} from "../../../../common/entities/FormProps";
import data from "../../../../../data/data.json";

export const embeddedRings: SelectProp = {
  id: "EmbeddedRingsType",
  label: "Tipo",
  options: data["EmbeddedRingsTypes"],
  type: FormPropType.Select,
};

export const embeddedRingsSN: InputProp = {
  id: "embeddedRingsSN",
  label: "S/N",
  type: FormPropType.Input,
};

export const embeddedRingsQuantity: InputProp = {
  id: "embeddedRingsQuantity",
  label: "QTD/LATERAL",
  type: FormPropType.Input,
};