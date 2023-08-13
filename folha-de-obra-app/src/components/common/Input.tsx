interface Props {
  id: string;
  label: string;
  inputType?: "text" | "number";
}

const Input = ({ id, label, inputType = "text" }: Props) => {
  return (
    <div className="col-md-3">
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <input id={id} type={inputType} className="form-control" />
    </div>
  );
};

export default Input;
