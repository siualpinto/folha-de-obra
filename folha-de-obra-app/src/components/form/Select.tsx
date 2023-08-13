interface Props {
  id: string;
  label: string;
  options: string[];
}

const Select = ({ id, label, options }: Props) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <select className="form-select" name={id} id={id}>
        {options.map((option) => (
          <option value={option}>{option}</option>
        ))}
      </select>
    </>
  );
};

export default Select;
