import { InputProp } from "../entities/FormProps";
import * as rs from "reactstrap";

const Input = ({ id, label, inputType = "text", onChange, value, disabled, name = undefined }: InputProp) => {
  return (
    <rs.FormGroup row>
      {/* <rs.Label for={id} sm={3}> uncomment for side by side layout */}
      <rs.Label for={id}>{label}</rs.Label>
      <rs.Col>
        <rs.Input
          name={name !== undefined ? name : id}
          id={id}
          placeholder=""
          onChange={onChange}
          disabled={disabled}
          type={inputType}
          value={value}
        />
      </rs.Col>
    </rs.FormGroup>
  );
};

export default Input;
