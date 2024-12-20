export interface FormProp {
  id: string;
  type?: FormPropType;
  disabled?: boolean | undefined;
}

export enum FormPropType {
  Input,
  Select,
}

export interface InputProp extends FormProp {
  label: string;
  name?: string | undefined;
  inputType?: "text" | "number" | "email";
  type?: FormPropType.Input;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
  value?: string | ReadonlyArray<string> | number | undefined;
}

export interface SelectProp extends FormProp {
  label: string;
  options: string[];
  type?: FormPropType.Select;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
  value?: string | ReadonlyArray<string> | number | undefined;
}

export interface MultipleInput {
  inputs: FormProp[];
  title: string;
}
