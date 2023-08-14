interface Props {
  ids: string[];
  labels: string[];
  title: string;
  inputType?: "text" | "number";
}

const MultipleInputs = ({ ids, labels, title, inputType = "text" }: Props) => {
  return (
    <>
      <h3>{title}</h3>
      <div className="container">
        <div className="row">
          {ids.map((id, index) => (
            <div className="col">
              <label htmlFor={id} className="form-label">
                {labels[index]}
              </label>
              <input id={id} type={inputType} className="form-control" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MultipleInputs;
