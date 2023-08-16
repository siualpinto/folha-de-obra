import { Order } from "../../../../store/model/order";
import "./orderTile.css";

interface Props {
  Order: Order
}

function OrderTile({ Order }: Props) {
  return (
    <li className="order">
      <p> {Order.Client.Name}</p>
    </li>
  );
}

export default OrderTile;
