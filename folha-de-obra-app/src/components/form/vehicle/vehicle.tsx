import {
  externalH,
  externalL,
  externalW,
  internalH,
  internalL,
  internalW,
} from "./helper";
import data from "../../../data/data.json";
import Input from "../../common/Inputs/Input";
import MultipleInputs from "../../common/Inputs/MultipleInputs";
import Select from "../../common/Select";
function Vehicle() {
  return (
    <>
      <h3>Veiculo</h3>
      <div className="container">
        <div className="row">
          <div className="col">
            <Select id="Box" label="Tipo de Caixa" options={data["BoxTypes"]} />
            <Select id="Brand" label="Marca" options={data["BrandTypes"]} />
            <Input id="Model" label="Modelo" />
            <Input id="Tension" label="Tensão" />
            <Input id="Variant" label="Variação" />
            <Input id="Version" label="Versão" />
          </div>
          <div className="col">
            <MultipleInputs
              title="Dimensões Exteriores Principais"
              inputs={[externalL, externalW, externalH]}
            />
            <MultipleInputs
              title="Dimensões Exteriores Principais"
              inputs={[internalL, internalW, internalH]}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Vehicle;
