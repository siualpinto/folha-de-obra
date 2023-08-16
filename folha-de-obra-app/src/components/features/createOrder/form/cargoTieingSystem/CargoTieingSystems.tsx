import { useSelector } from "react-redux";
import MultipleInputs from "../../../../common/Inputs/MultipleInputs";
import {
  embeddedRings,
  embeddedRingsQuantity,
  embeddedRingsSN,
} from "./Helper";
import { FormState, Mode } from "../../formSlice";

const CargoTieingSystem = () => {
  const formState = useSelector((state: any) => state.formReducer)
    .value as FormState;
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <MultipleInputs
              title="Argolas Embutidas"
              inputs={[
                {
                  ...embeddedRings,
                  disabled: formState.Options.Mode === Mode.View,
                },
                {
                  ...embeddedRingsSN,
                  disabled: formState.Options.Mode === Mode.View,
                },
                {
                  ...embeddedRingsQuantity,
                  disabled: formState.Options.Mode === Mode.View,
                },
              ]}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CargoTieingSystem;

// TODO
// Roquetes De Amarração De Carga
// Ganchos De Corda
// Orificios De Amarração No Estrado
// Braços Porta Contentores
