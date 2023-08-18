import { useDispatch, useSelector } from "react-redux";
import data from "../../../../../data/data.json";
import Input from "../../../../common/Inputs/Input";
import Select from "../../../../common/Select";
import { FormState, Mode, actions } from "../../formSlice";
import { ChangeEvent } from "react";

function TruckSides() {
  const dispatch = useDispatch();
  const formState = useSelector((state: any) => state.formReducer).value as FormState;

  function onChange(event: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    dispatch(
      actions.setTruckSides({
        ...formState.Order.TruckSides,
        [name]: value,
      })
    );
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <Select
              disabled={formState.Options.Mode === Mode.View}
              id="SideType"
              label="Tipos de Taipais"
              options={data.SideTypes}
              value={formState.Order.TruckSides.SideType}
              onChange={onChange}
            />
            <Input
              disabled={formState.Options.Mode === Mode.View}
              id="CentralColumns"
              label="Colunas Centrais"
              value={formState.Order.TruckSides.CentralColumns}
              onChange={onChange}
            />
            <Input
              id="RearColumns"
              label="Colunas Traseiras"
              disabled={formState.Options.Mode === Mode.View}
              value={formState.Order.TruckSides.RearColumns}
              onChange={onChange}
            />
            <Input
              disabled={formState.Options.Mode === Mode.View}
              id="FrontColumns"
              label="Colunas Frontais"
              value={formState.Order.TruckSides.FrontColumns}
              onChange={onChange}
            />
            <Select
              disabled={formState.Options.Mode === Mode.View}
              id="SupplementarySidesType"
              label="Taipais Suplementares"
              options={data.SupplementarySides}
              value={formState.Order.TruckSides.SupplementarySidesType}
              onChange={onChange}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default TruckSides;
