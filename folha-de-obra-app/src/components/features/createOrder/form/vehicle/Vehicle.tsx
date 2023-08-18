import { externalH, externalL, externalW, internalH, internalL, internalW } from "./Helper";
import data from "../../../../../data/data.json";
import Input from "../../../../common/Inputs/Input";
import MultipleInputs from "../../../../common/Inputs/MultipleInputs";
import Select from "../../../../common/Select";
import { useDispatch, useSelector } from "react-redux";
import { actions, FormState, Mode } from "../../formSlice";
import { InputProp } from "../../../../common/entities/FormProps";
import { ChangeEvent } from "react";
import * as rs from "reactstrap";

function Vehicle() {
  const dispatch = useDispatch();
  const formState = useSelector((state: any) => state.formReducer).value as FormState;

  function onVehicleChange(event: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    dispatch(
      actions.setVehicle({
        ...formState.Order.Vehicle,
        [name]: value,
      })
    );
  }

  function onExternalDimensionsVehicleChange(event: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    dispatch(
      actions.setVehicleExternalDimensions({
        ...formState.Order.Vehicle.ExternalDimensions,
        [name]: value,
      })
    );
  }

  function onInternalDimensionsVehicleChange(event: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    dispatch(
      actions.setVehicleInternalDimensions({
        ...formState.Order.Vehicle.InternalDimensions,
        [name]: value,
      })
    );
  }

  return (
    <>
      <rs.CardTitle tag="h5" className="mt-4 mb-3">
        Geral
      </rs.CardTitle>
      <rs.Form>
        <Select
          disabled={formState.Options.Mode === Mode.View}
          id="BoxType"
          label="Tipo de Caixa"
          options={data.BoxTypes}
          value={formState.Order.Vehicle.BoxType}
          onChange={onVehicleChange}
        />
        <Select
          disabled={formState.Options.Mode === Mode.View}
          id="Brand"
          label="Marca"
          options={data.BrandTypes}
          value={formState.Order.Vehicle.Brand}
          onChange={onVehicleChange}
        />
        <Input
          disabled={formState.Options.Mode === Mode.View}
          id="Model"
          label="Modelo"
          value={formState.Order.Vehicle.Model}
          onChange={onVehicleChange}
        />
        <Input
          disabled={formState.Options.Mode === Mode.View}
          id="Tension"
          label="Tensão"
          value={formState.Order.Vehicle.Tension}
          onChange={onVehicleChange}
        />
        <Input
          disabled={formState.Options.Mode === Mode.View}
          id="Variant"
          label="Variação"
          value={formState.Order.Vehicle.Variation}
          onChange={onVehicleChange}
        />
        <Input
          disabled={formState.Options.Mode === Mode.View}
          id="Version"
          label="Versão"
          value={formState.Order.Vehicle.Version}
          onChange={onVehicleChange}
        />
      </rs.Form>
      <MultipleInputs
        title="Dimensões Exteriores Principais"
        inputs={[
          {
            ...externalL,
            value: formState.Order.Vehicle.ExternalDimensions.Length,
            onChange: onExternalDimensionsVehicleChange,
            disabled: formState.Options.Mode === Mode.View,
          } as InputProp,
          {
            ...externalW,
            value: formState.Order.Vehicle.ExternalDimensions.Width,
            onChange: onExternalDimensionsVehicleChange,
            disabled: formState.Options.Mode === Mode.View,
          } as InputProp,
          {
            ...externalH,
            value: formState.Order.Vehicle.ExternalDimensions.Height,
            onChange: onExternalDimensionsVehicleChange,
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
            onChange: onInternalDimensionsVehicleChange,
            disabled: formState.Options.Mode === Mode.View,
          } as InputProp,
          {
            ...internalW,
            value: formState.Order.Vehicle.InternalDimensions.Width,
            onChange: onInternalDimensionsVehicleChange,
            disabled: formState.Options.Mode === Mode.View,
          } as InputProp,
          {
            ...internalH,
            value: formState.Order.Vehicle.InternalDimensions.Height,
            onChange: onInternalDimensionsVehicleChange,
            disabled: formState.Options.Mode === Mode.View,
          } as InputProp,
        ]}
      />
    </>
  );
}

export default Vehicle;
