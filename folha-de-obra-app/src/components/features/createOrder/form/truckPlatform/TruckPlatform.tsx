import { useSelector } from "react-redux";
import data from "../../../../../data/data.json";
import Input from "../../../../common/Inputs/Input";
import Select from "../../../../common/Select";
import { FormState, Mode } from "../../formSlice";

const TruckPlatform = () => {
  const formState = useSelector((state: any) => state.formReducer)
    .value as FormState;

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <Select
              disabled={formState.Options.Mode === Mode.View}
              id="TruckPlatformType"
              label="Tipo De Estrutura Para Estrado"
              options={data.TruckPlatformTypes}
            />
            <Select
              disabled={formState.Options.Mode === Mode.View}
              id="TruckBeamType"
              label="Tipo De Longarinas"
              options={data.TruckBeamTypes}
            />
            <Select
              disabled={formState.Options.Mode === Mode.View}
              id="TruckTraverseBeamType"
              label="Tipo De Travessas"
              options={data.TruckTraverseBeamTypes}
            />
            <Select
              disabled={formState.Options.Mode === Mode.View}
              id="TruckClosingBeamType"
              label="Fechal"
              options={data.TruckTraverseBeamTypes}
            />
            <Input
              id="TruckFloorType"
              label="Tipo De Piso"
              disabled={formState.Options.Mode === Mode.View}
            />
            <Input
              disabled={formState.Options.Mode === Mode.View}
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
