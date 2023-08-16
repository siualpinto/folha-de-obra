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
import { actions, FormState, Mode } from "../../formSlice";
import { InputProp } from "../../../../common/entities/FormProps";

function Vehicle() {
  const dispatch = useDispatch();
  const formState = useSelector((state: any) => state.formReducer)
    .value as FormState;

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <Select
              disabled={formState.Options.Mode === Mode.View}
              id="Box"
              label="Tipo de Caixa"
              options={data.BoxTypes}
              value={formState.Order.Vehicle.BoxType}
              onChange={(e) =>
                dispatch(actions.setVehicleBoxType(e.target.value))
              }
            />
            <Select
              disabled={formState.Options.Mode === Mode.View}
              id="Brand"
              label="Marca"
              options={data.BrandTypes}
              value={formState.Order.Vehicle.Brand}
              onChange={(e) =>
                dispatch(actions.setVehicleBrand(e.target.value))
              }
            />
            <Input
              disabled={formState.Options.Mode === Mode.View}
              id="Model"
              label="Modelo"
              value={formState.Order.Vehicle.Model}
              onChange={(e) =>
                dispatch(actions.setVehicleModel(e.target.value))
              }
            />
            <Input
              disabled={formState.Options.Mode === Mode.View}
              id="Tension"
              label="Tensão"
              value={formState.Order.Vehicle.Tension}
              onChange={(e) =>
                dispatch(actions.setVehicleTension(e.target.value))
              }
            />
            <Input
              disabled={formState.Options.Mode === Mode.View}
              id="Variant"
              label="Variação"
              value={formState.Order.Vehicle.Variation}
              onChange={(e) =>
                dispatch(actions.setVehicleVariation(e.target.value))
              }
            />
            <Input
              disabled={formState.Options.Mode === Mode.View}
              id="Version"
              label="Versão"
              value={formState.Order.Vehicle.Version}
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
                  value: formState.Order.Vehicle.ExternalDimensions.Length,
                  onChange: (e: any) =>
                    dispatch(
                      actions.setVehicleExternalDimensionsLength(e.target.value)
                    ),
                  disabled: formState.Options.Mode === Mode.View,
                } as InputProp,
                {
                  ...externalW,
                  value: formState.Order.Vehicle.ExternalDimensions.Width,
                  onChange: (e: any) =>
                    dispatch(
                      actions.setVehicleExternalDimensionsWidth(e.target.value)
                    ),
                  disabled: formState.Options.Mode === Mode.View,
                } as InputProp,
                {
                  ...externalH,
                  value: formState.Order.Vehicle.ExternalDimensions.Height,
                  onChange: (e: any) =>
                    dispatch(
                      actions.setVehicleExternalDimensionsHeight(e.target.value)
                    ),
                  disabled: formState.Options.Mode === Mode.View,
                } as InputProp,
              ]}
            />
            <MultipleInputs
              title="Dimensões Interiores Principais"
              inputs={[
                {
                  ...internalL,
                  value: formState.Order.Vehicle.InternalDimensions.Length,
                  onChange: (e: any) =>
                    dispatch(
                      actions.setVehicleInternalDimensionsLength(e.target.value)
                    ),
                  disabled: formState.Options.Mode === Mode.View,
                } as InputProp,
                {
                  ...internalW,
                  value: formState.Order.Vehicle.InternalDimensions.Width,
                  onChange: (e: any) =>
                    dispatch(
                      actions.setVehicleInternalDimensionsWidth(e.target.value)
                    ),
                  disabled: formState.Options.Mode === Mode.View,
                } as InputProp,
                {
                  ...internalH,
                  value: formState.Order.Vehicle.InternalDimensions.Height,
                  onChange: (e: any) =>
                    dispatch(
                      actions.setVehicleInternalDimensionsHeight(e.target.value)
                    ),
                  disabled: formState.Options.Mode === Mode.View,
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
