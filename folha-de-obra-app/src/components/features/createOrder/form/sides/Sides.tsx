import { useSelector } from "react-redux";
import data from "../../../../../data/data.json";
import Input from "../../../../common/Inputs/Input";
import Select from "../../../../common/Select";
import { FormState, Mode } from "../../formSlice";

const Sides = () => {
  const formState = useSelector((state: any) => state.formReducer)
    .value as FormState;
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <Select
              disabled={formState.Options.Mode === Mode.View}
              id="Side"
              label="Tipos de Taipais"
              options={data.SideTypes}
            />
            <Input
              id="CentralColumns"
              label="Colunas Centrais"
              disabled={formState.Options.Mode === Mode.View}
            />
            <Input
              id="RearColumns"
              label="Colunas Traseiras"
              disabled={formState.Options.Mode === Mode.View}
            />
            <Input
              id="FrontColumns"
              label="Colunas Frontais"
              disabled={formState.Options.Mode === Mode.View}
            />
            <Select
              disabled={formState.Options.Mode === Mode.View}
              id="SupplementarySides"
              label="Taipais Suplementares"
              options={data.SupplementarySides}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sides;
