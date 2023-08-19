import { useDispatch } from "react-redux";
import { Order } from "../../../../store/model/order/order";
import "./orderTile.css";
import { FormState, actions, Mode } from "../../createOrder/formSlice";

interface Props {
  Order: Order;
}

function OrderTile({ Order }: Props) {
  const dispatch = useDispatch();

  function openOrder(order: Order) {
    const formState: FormState = {
      Options: {
        IsOpen: true,
        Mode: Mode.View,
      },
      Order: order,
    };
    dispatch(actions.setState(formState));
  }

  return (
    <tr key={Order.Id} onClick={() => openOrder(Order)}>
      <td className="align-middle text-left">{Order.Id}</td>
      <td className="align-middle text-left">{Order.Client.Name}</td>
      <td className="align-middle text-left">{Order.Vehicle.Brand}</td>
      <td className="align-middle text-left">{Order.Vehicle.Model}</td>
      <td className="align-middle text-left">{Order.Vehicle.BoxType}</td>
    </tr>
  );
}

export default OrderTile;
