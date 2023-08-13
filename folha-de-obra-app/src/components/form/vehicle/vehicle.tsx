import data from "../../../data/data.json";
import Input from "../../common/Input";
import Select from "../../common/Select";

const vehicle = () => {
  return (
    <>
      {" "}
      <h3>Veiculo</h3>
      <Select id="Brand" label="Marca" options={data["Brands"]} />
      <Input id="Model" label="Modelo" />
      <Input id="Tension" label="Tensão" />
      <Input id="Variant" label="Variação" />
      <Input id="Version" label="Versão" />
    </>
  );
};

export default vehicle;
