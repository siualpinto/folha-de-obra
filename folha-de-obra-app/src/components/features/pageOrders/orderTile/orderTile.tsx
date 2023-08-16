import { useDispatch } from "react-redux";
import { Order } from "../../../../store/model/order";
import "./orderTile.css";
import { FormState, actions } from "../../createOrder/formSlice";

interface Props {
  Order: Order;
}

function OrderTile({ Order }: Props) {
  const dispatch = useDispatch();

  function openOrder(order: Order) {
    const formState: FormState = {
      Options: {
        IsOpen: true,
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
