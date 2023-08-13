import data from "../../../data/data.json";
import Select from "../../common/Select";

const vehicle = () => {
  return (
    <>
      {" "}
      <h3>Veiculo</h3>
      <Select id="brand" label="Marca" options={data["Brands"]} />
    </>
  );
};

export default vehicle;
