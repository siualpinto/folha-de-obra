import data from "../../../data/data.json";
import Input from "../../common/Input";
import Select from "../../common/Select";

const vehicle = () => {
  return (
    <>
      <h3>Veiculo</h3>
      <div className="container">
        <div className="row">
          <div className="col">
            <Select id="Brand" label="Marca" options={data["Brands"]} />
            <Input id="Model" label="Modelo" />
            <Input id="Tension" label="Tensão" />
            <Input id="Variant" label="Variação" />
            <Input id="Version" label="Versão" />
          </div>
          <div className="col">Dimensoes</div>
        </div>
      </div>
    </>
  );
};

export default vehicle;
