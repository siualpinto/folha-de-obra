import Input from "../../../../common/Inputs/Input";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../formSlice";
import { Order } from "../../../../../store/model/order";

const Client = () => {
  const dispatch = useDispatch();
  const formState = useSelector((state: any) => state.formReducer).value
    .Order as Order;

  return (
    <>
      <div className="col-md-3">
        <Input
          id="ClientName"
          label="Nome"
          value={formState.Client.Name}
          onChange={(e) => dispatch(actions.setClientName(e.target.value))}
        />
        <Input
          id="PersonName"
          label="Pessoa de contacto"
          value={formState.Client.ContactPerson}
          onChange={(e) =>
            dispatch(actions.setClientContactPerson(e.target.value))
          }
        />
        <Input
          id="Email"
          label="Email"
          value={formState.Client.Email}
          onChange={(e) => dispatch(actions.setClientEmail(e.target.value))}
        />
        <Input
          id="Phone"
          inputType="number"
          label="Telemovel"
          value={formState.Client.Phone}
          onChange={(e) => dispatch(actions.setClientPhone(e.target.value))}
        />
      </div>
    </>
  );
};

export default Client;
