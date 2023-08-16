import { useSelector } from "react-redux";
import OrderTile from "../orderTile/orderTile";
import { Order } from "../../../../store/model/order";
import "./ordersList.css";

function OrdersList() {
  const orders = useSelector((state: any) => state.ordersReducer)
    .value as Order[];

  return (
    <section>
      <ul className="orders-list">
        {orders.map((order) => (
          <OrderTile key={order.Id} Order={order} />
        ))}
      </ul>
    </section>
  );
}

export default OrdersList;
