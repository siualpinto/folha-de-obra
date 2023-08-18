import { SelectProp } from "./entities/FormProps";
import * as rs from "reactstrap";

const Select = ({ id, label, options = [], onChange, value, disabled }: SelectProp) => {
  return (
    <>
      <rs.FormGroup row>
        {/* <rs.Label for={id} sm={3}> uncomment for side by side layout*/}
        <rs.Label for={id}>{label}</rs.Label>
        <rs.Col>
          <rs.Input
            type="select"
            id={id}
            disabled={disabled}
            className="form-select"
            name={id}
            onChange={onChange}
            value={value}
          >
            <option defaultValue="">Selecionar...</option>
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </rs.Input>
        </rs.Col>
      </rs.FormGroup>
    </>
  );
};

export default Select;
