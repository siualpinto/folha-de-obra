import { SelectProp } from "./entities/FormProps";

const Select = ({ id, label, options = [], onChange, value, disabled }: SelectProp) => {
  return (
    <>
      <div>
        <label htmlFor={id}>{label}</label>
        <select disabled={disabled} className="form-select" name={id} id={id} onChange={onChange} value={value}>
          <option value="">Abrir este menu de escolha</option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default Select;
