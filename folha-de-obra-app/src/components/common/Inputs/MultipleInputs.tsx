import Select from "../Select";
import {
  InputProp,
  FormPropType,
  SelectProp,
  MultipleInput,
} from "../entities/FormProps";
import Input from "./Input";
const MultipleInputs = ({ inputs, title }: MultipleInput) => {
  return (
    <>
      <h3>{title}</h3>
      <div className="container">
        <div className="row">
          {inputs.map((input) => (
            <div className="col">
              {input.type == FormPropType.Input && (
                <Input {...(input as InputProp)} />
              )}
              {input.type == FormPropType.Select && (
                <Select {...(input as SelectProp)} />
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MultipleInputs;
