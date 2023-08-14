import MultipleInputs from "../../common/Inputs/MultipleInputs";
import {
  embeddedRings,
  embeddedRingsQuantity,
  embeddedRingsSN,
} from "./helper";

const CargoTieingSystem = () => {
  return (
    <>
      <h3>Sistemas De Amarração De Carga</h3>
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
