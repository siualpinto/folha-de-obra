import { Cast } from "../../../common/generic/genericFunctions";
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
                <Input
                  id={Cast<InputProp>(input).id}
                  label={Cast<InputProp>(input).label}
                  inputType={Cast<InputProp>(input).inputType}
                />
              )}
              {input.type == FormPropType.Select && (
                <Select
                  id={Cast<SelectProp>(input).id}
                  label={Cast<SelectProp>(input).label}
                  options={Cast<SelectProp>(input).options}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MultipleInputs;
