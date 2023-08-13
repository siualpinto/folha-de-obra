interface Props {
  id: string;
  label: string;
  options: string[];
}

const Select = ({ id, label, options }: Props) => {
  return (
    <>
      <div className="col-md-3">
        <label htmlFor={id}>{label}</label>
        <select className="form-select" name={id} id={id}>
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
