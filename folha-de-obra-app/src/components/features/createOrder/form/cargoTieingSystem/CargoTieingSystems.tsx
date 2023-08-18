import { useDispatch, useSelector } from "react-redux";
import MultipleInputs from "../../../../common/Inputs/MultipleInputs";
import { embeddedRings, embeddedRingsQuantity, embeddedRingsSN } from "./Helper";
import { FormState, Mode, actions } from "../../formSlice";
import { ChangeEvent } from "react";
import { InputProp, SelectProp } from "../../../../common/entities/FormProps";

function CargoTieingSystem() {
  const dispatch = useDispatch();
  const formState = useSelector((state: any) => state.formReducer).value as FormState;

  function onChange(event: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    dispatch(
      actions.setCargoTieingSystem({
        ...formState.Order.CargoTieingSystem,
        [name]: value,
      })
    );
  }

  return (
    <>
      <MultipleInputs
        title="Argolas Embutidas"
        inputs={[
          {
            ...embeddedRings,
            disabled: formState.Options.Mode === Mode.View,
            value: formState.Order.CargoTieingSystem.EmbeddedRingsType,
            onChange: onChange,
          } as SelectProp,
          {
            ...embeddedRingsSN,
            disabled: formState.Options.Mode === Mode.View,
            value: formState.Order.CargoTieingSystem.EmbeddedRingsSN,
            onChange: onChange,
          } as InputProp,
          {
            ...embeddedRingsQuantity,
            disabled: formState.Options.Mode === Mode.View,
            value: formState.Order.CargoTieingSystem.EmbeddedRingsQuantity,
            onChange: onChange,
          } as InputProp,
        ]}
      />
    </>
  );
}

export default CargoTieingSystem;

// TODO
// Roquetes De Amarração De Carga
// Ganchos De Corda
// Orificios De Amarração No Estrado
// Braços Porta Contentores
