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
    <li className="order" onClick={() => openOrder(Order)}>
      <p> {Order.Client.Name}</p>
    </li>
  );
}

export default OrderTile;
