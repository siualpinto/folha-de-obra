import Select from "../Select";
import { InputProp, FormPropType, SelectProp, MultipleInput } from "../entities/FormProps";
import Input from "./Input";
import * as rs from "reactstrap";
const MultipleInputs = ({ inputs, title }: MultipleInput) => {
  return (
    <>
      <rs.CardTitle tag="h5" className="mt-4 mb-3">
        {title}
      </rs.CardTitle>
      <rs.Form>
        {inputs.map((input) => (
          <div key={input.id} className="col">
            {input.type == FormPropType.Input && <Input {...(input as InputProp)} />}
            {input.type == FormPropType.Select && <Select {...(input as SelectProp)} />}
          </div>
        ))}
      </rs.Form>
    </>
  );
};

export default MultipleInputs;
