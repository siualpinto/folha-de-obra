interface Props {
  id: string;
  label: string;
  options: string[];
  onChange?: React.ChangeEventHandler<HTMLSelectElement> | undefined;
  value?: string | ReadonlyArray<string> | number | undefined;
}

const Select = ({ id, label, options = [], onChange, value }: Props) => {
  return (
    <>
      <div>
        <label htmlFor={id}>{label}</label>
        <select
          className="form-select"
          name={id}
          id={id}
          onChange={onChange}
          value={value}
        >
          <option selected>Abrir este menu de escolha</option>
          {options.map((option) => (
            <option value={option}>{option}</option>
          ))}
        </select>
      </div>
    </>
  );
};

export default Select;
