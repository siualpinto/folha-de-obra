import data from "../../../data/data.json";
import Input from "../../common/Input";
import MultipleInputs from "../../common/MultipleInputs";
import Select from "../../common/Select";

const Vehicle = () => {
  return (
    <>
      <h3>Veiculo</h3>
      <div className="container">
        <div className="row">
          <div className="col">
            <Select id="Box" label="Tipo de Caixa" options={data["Boxes"]} />
            <Select id="Brand" label="Marca" options={data["Brands"]} />
            <Input id="Model" label="Modelo" />
            <Input id="Tension" label="Tensão" />
            <Input id="Variant" label="Variação" />
            <Input id="Version" label="Versão" />
          </div>
          <div className="col">
            <MultipleInputs
              ids={["External_L", "External_L", "External_L"]}
              title="Dimensões Exteriores Principais"
              labels={["L", "W", "H"]}
              inputType="number"
            />
            <MultipleInputs
              ids={["Internal_L", "Internal_L", "Internal_L"]}
              title="Dimensões Inteiores Principais"
              labels={["L", "W", "H"]}
              inputType="number"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Vehicle;
