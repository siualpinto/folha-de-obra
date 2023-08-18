import Input from "../../../../common/Inputs/Input";
import { useDispatch, useSelector } from "react-redux";
import { actions, FormState, Mode } from "../../formSlice";
import { ChangeEvent } from "react";

const Client = () => {
  const dispatch = useDispatch();
  const formState = useSelector((state: any) => state.formReducer).value as FormState;

  function onChange(event: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    dispatch(
      actions.setClient({
        ...formState.Order.Client,
        [name]: value,
      })
    );
  }

  return (
    <>
      <Input
        disabled={formState.Options.Mode === Mode.View}
        id="Name"
        label="Nome"
        value={formState.Order.Client.Name}
        onChange={onChange}
      />
      <Input
        disabled={formState.Options.Mode === Mode.View}
        id="ContactPerson"
        label="Pessoa de contacto"
        value={formState.Order.Client.ContactPerson}
        onChange={onChange}
      />
      <Input
        disabled={formState.Options.Mode === Mode.View}
        id="Email"
        label="Email"
        value={formState.Order.Client.Email}
        onChange={onChange}
        inputType="email"
      />
      <Input
        disabled={formState.Options.Mode === Mode.View}
        id="Phone"
        inputType="number"
        label="Telemovel"
        value={formState.Order.Client.Phone}
        onChange={onChange}
      />
    </>
  );
};

export default Client;
