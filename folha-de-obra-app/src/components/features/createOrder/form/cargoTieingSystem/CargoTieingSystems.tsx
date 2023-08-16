import MultipleInputs from "../../../../common/Inputs/MultipleInputs";
import {
  embeddedRings,
  embeddedRingsQuantity,
  embeddedRingsSN,
} from "./Helper";

const CargoTieingSystem = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <MultipleInputs
              title="Argolas Embutidas"
              inputs={[embeddedRings, embeddedRingsSN, embeddedRingsQuantity]}
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
