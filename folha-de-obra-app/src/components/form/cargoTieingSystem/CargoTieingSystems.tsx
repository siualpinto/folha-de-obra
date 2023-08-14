import data from "../../../data/data.json";
import Input from "../../common/Inputs/Input";
import Select from "../../common/Select";

const CargoTieingSystem = () => {
  return (
    <>
      <h3>Sistemas De Amarração De Carga</h3>
      <div className="container">
        <div className="row">
          <div className="col">
            <Select
              id="TruckPlatformType"
              label="Tipo De Estrutura Para Estrado"
              options={data["TruckPlatformTypes"]}
            />

            <Input id="TruckFloorType" label="Tipo De Piso" />
          </div>
        </div>
      </div>
    </>
  );
};

export default CargoTieingSystem;
