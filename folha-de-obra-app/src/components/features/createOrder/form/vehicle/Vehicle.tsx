import {
  externalH,
  externalL,
  externalW,
  internalH,
  internalL,
  internalW,
} from "./Helper";
import data from "../../../../../data/data.json";
import Input from "../../../../common/Inputs/Input";
import MultipleInputs from "../../../../common/Inputs/MultipleInputs";
import Select from "../../../../common/Select";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../../../../store/features/form/formSlice";
import { Order } from "../../../../../store/model/order";
import { InputProp } from "../../../../common/entities/FormProps";

function Vehicle() {
  const dispatch = useDispatch();
  const formState = useSelector((state: any) => state.formReducer)
    .value as Order;

  return (
    <>
      <h3>Veiculo</h3>
      <div className="container">
        <div className="row">
          <div className="col">
            <Select
              id="Box"
              label="Tipo de Caixa"
              options={data.BoxTypes}
              value={formState.Vehicle.BoxType}
              onChange={(e) =>
                dispatch(actions.setVehicleBoxType(e.target.value))
              }
            />
            <Select
              id="Brand"
              label="Marca"
              options={data.BrandTypes}
              value={formState.Vehicle.Brand}
              onChange={(e) =>
                dispatch(actions.setVehicleBrand(e.target.value))
              }
            />
            <Input
              id="Model"
              label="Modelo"
              value={formState.Vehicle.Model}
              onChange={(e) =>
                dispatch(actions.setVehicleModel(e.target.value))
              }
            />
            <Input
              id="Tension"
              label="Tensão"
              value={formState.Vehicle.Tension}
              onChange={(e) =>
                dispatch(actions.setVehicleTension(e.target.value))
              }
            />
            <Input
              id="Variant"
              label="Variação"
              value={formState.Vehicle.Variation}
              onChange={(e) =>
                dispatch(actions.setVehicleVariation(e.target.value))
              }
            />
            <Input
              id="Version"
              label="Versão"
              value={formState.Vehicle.Version}
              onChange={(e) =>
                dispatch(actions.setVehicleVersion(e.target.value))
              }
            />
          </div>
          <div className="col">
            <MultipleInputs
              title="Dimensões Exteriores Principais"
              inputs={[
                {
                  ...externalL,
                  value: formState.Vehicle.ExternalDimensions.Length,
                  onChange: (e: any) =>
                    dispatch(
                      actions.setVehicleExternalDimensionsLength(e.target.value)
                    ),
                } as InputProp,
                {
                  ...externalW,
                  value: formState.Vehicle.ExternalDimensions.Width,
                  onChange: (e: any) =>
                    dispatch(
                      actions.setVehicleExternalDimensionsWidth(e.target.value)
                    ),
                } as InputProp,
                {
                  ...externalH,
                  value: formState.Vehicle.ExternalDimensions.Height,
                  onChange: (e: any) =>
                    dispatch(
                      actions.setVehicleExternalDimensionsHeight(e.target.value)
                    ),
                } as InputProp,
              ]}
            />
            <MultipleInputs
              title="Dimensões Interiores Principais"
              inputs={[
                {
                  ...internalL,
                  value: formState.Vehicle.InternalDimensions.Length,
                  onChange: (e: any) =>
                    dispatch(
                      actions.setVehicleInternalDimensionsLength(e.target.value)
                    ),
                } as InputProp,
                {
                  ...internalW,
                  value: formState.Vehicle.InternalDimensions.Width,
                  onChange: (e: any) =>
                    dispatch(
                      actions.setVehicleInternalDimensionsWidth(e.target.value)
                    ),
                } as InputProp,
                {
                  ...internalH,
                  value: formState.Vehicle.InternalDimensions.Height,
                  onChange: (e: any) =>
                    dispatch(
                      actions.setVehicleInternalDimensionsHeight(e.target.value)
                    ),
                } as InputProp,
              ]}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Vehicle;
