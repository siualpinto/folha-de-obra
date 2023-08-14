import data from "../../../data/data.json";
import Input from "../../common/Inputs/Input";
import Select from "../../common/Select";

const TruckPlatform = () => {
  return (
    <>
      <h3>Configuração Estrado</h3>
      <div className="container">
        <div className="row">
          <div className="col">
            <Select
              id="TruckPlatformType"
              label="Tipo De Estrutura Para Estrado"
              options={data["TruckPlatformTypes"]}
            />
            <Select
              id="TruckBeamType"
              label="Tipo De Longarinas"
              options={data["TruckBeamTypes"]}
            />
            <Select
              id="TruckTraverseBeamType"
              label="Tipo De Travessas"
              options={data["TruckTraverseBeamTypes"]}
            />
            <Select
              id="TruckClosingBeamType"
              label="Fechal"
              options={data["TruckTraverseBeamTypes"]}
            />
            <Input id="TruckFloorType" label="Tipo De Piso" />
            <Input
              id="TruckFrameFixturesToChassisType"
              label="Tipo De Fixações De Estrutura Ao Chassis"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default TruckPlatform;
