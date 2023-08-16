import { InputProp } from "../entities/FormProps";

const Input = ({
  id,
  label,
  inputType = "text",
  onChange,
  value,
  disabled
}: InputProp) => {
  return (
    <div>
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <input
        disabled={disabled}
        id={id}
        type={inputType}
        className="form-control"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
