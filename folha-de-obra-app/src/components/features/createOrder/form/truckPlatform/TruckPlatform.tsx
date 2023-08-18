import { useDispatch, useSelector } from "react-redux";
import data from "../../../../../data/data.json";
import Input from "../../../../common/Inputs/Input";
import Select from "../../../../common/Select";
import { FormState, Mode, actions } from "../../formSlice";
import { ChangeEvent } from "react";

function TruckPlatform() {
  const dispatch = useDispatch();
  const formState = useSelector((state: any) => state.formReducer).value as FormState;

  function onChange(event: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    dispatch(
      actions.setTruckPlatform({
        ...formState.Order.TruckPlatform,
        [name]: value,
      })
    );
  }

  return (
    <>
      <Select
        disabled={formState.Options.Mode === Mode.View}
        id="TruckPlatformType"
        label="Tipo De Estrutura Para Estrado"
        options={data.TruckPlatformTypes}
        value={formState.Order.TruckPlatform.TruckPlatformType}
        onChange={onChange}
      />
      <Select
        disabled={formState.Options.Mode === Mode.View}
        id="TruckBeamType"
        label="Tipo De Longarinas"
        options={data.TruckBeamTypes}
        value={formState.Order.TruckPlatform.TruckBeamType}
        onChange={onChange}
      />
      <Select
        disabled={formState.Options.Mode === Mode.View}
        id="TruckTraverseBeamType"
        label="Tipo De Travessas"
        options={data.TruckTraverseBeamTypes}
        value={formState.Order.TruckPlatform.TruckTraverseBeamType}
        onChange={onChange}
      />
      <Select
        disabled={formState.Options.Mode === Mode.View}
        id="TruckClosingBeamType"
        label="Fechal"
        options={data.TruckTraverseBeamTypes}
        value={formState.Order.TruckPlatform.TruckClosingBeamType}
        onChange={onChange}
      />
      <Input
        id="TruckFloorType"
        label="Tipo De Piso"
        disabled={formState.Options.Mode === Mode.View}
        value={formState.Order.TruckPlatform.TruckFloorType}
        onChange={onChange}
      />
      <Input
        disabled={formState.Options.Mode === Mode.View}
        id="TruckFrameFixturesToChassisType"
        label="Tipo De Fixações De Estrutura Ao Chassis"
        value={formState.Order.TruckPlatform.TruckFrameFixturesToChassisType}
        onChange={onChange}
      />
    </>
  );
}

export default TruckPlatform;
