import Input from "../../../../common/Inputs/Input";
import { useDispatch, useSelector } from "react-redux";
import { actions, FormState, Mode } from "../../formSlice";

const Client = () => {
  const dispatch = useDispatch();
  const formState = useSelector((state: any) => state.formReducer)
    .value as FormState;

  return (
    <>
      <div className="col-md-3">
        <Input
          disabled={formState.Options.Mode === Mode.View}
          id="ClientName"
          label="Nome"
          value={formState.Order.Client.Name}
          onChange={(e) => dispatch(actions.setClientName(e.target.value))}
        />
        <Input
          disabled={formState.Options.Mode === Mode.View}
          id="PersonName"
          label="Pessoa de contacto"
          value={formState.Order.Client.ContactPerson}
          onChange={(e) =>
            dispatch(actions.setClientContactPerson(e.target.value))
          }
        />
        <Input
          disabled={formState.Options.Mode === Mode.View}
          id="Email"
          label="Email"
          value={formState.Order.Client.Email}
          onChange={(e) => dispatch(actions.setClientEmail(e.target.value))}
        />
        <Input
          disabled={formState.Options.Mode === Mode.View}
          id="Phone"
          inputType="number"
          label="Telemovel"
          value={formState.Order.Client.Phone}
          onChange={(e) => dispatch(actions.setClientPhone(e.target.value))}
        />
      </div>
    </>
  );
};

export default Client;
