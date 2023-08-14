interface InputProp extends Prop {
  inputType?: "text" | "number";
}

interface SelectProp extends Prop {
  options: string[];
}

interface Prop {
  id: string[];
  label: string[];
}

interface MultipleInputs {
  inputs: Prop[];
}
