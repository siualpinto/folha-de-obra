export interface FormProp {
  type: FormPropType;
}

export enum FormPropType {
  Input,
  Select,
}

export interface InputProp extends FormProp {
  id: string;
  label: string;
  inputType?: "text" | "number";
  type: FormPropType.Input;
}

export interface SelectProp extends FormProp {
  id: string;
  label: string;
  options: string[];
  type: FormPropType.Select;
}

export interface MultipleInput {
  inputs: FormProp[];
  title: string;
}
