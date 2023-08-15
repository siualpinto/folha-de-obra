interface Props {
  id: string;
  label: string;
  inputType?: "text" | "number";
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
  value?: string | ReadonlyArray<string> | number | undefined;
}

const Input = ({ id, label, inputType = "text", onChange, value }: Props) => {
  return (
    <div>
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <input
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
