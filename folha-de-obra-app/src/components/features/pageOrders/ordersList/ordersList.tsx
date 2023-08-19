import { useSelector } from "react-redux";
import OrderTile from "../orderTile/orderTile";
import { Order } from "../../../../store/model/order/order";
import "./ordersList.css";
import * as rs from "reactstrap";

function OrdersList() {
  const orders = useSelector((state: any) => state.ordersReducer).value as Order[];

  return (
    <section>
      <rs.Card>
        <rs.CardBody>
          <rs.CardTitle tag="h6">Lista de Encomendas</rs.CardTitle>
          {/* <p className="mb-0">
                Add <code>size="sm"</code> to make tables more compact by cutting cell padding in half.
              </p> */}
        </rs.CardBody>
        <rs.Table hover responsive>
          <thead>
            <tr>
              <th className="bt-0">ID</th>
              <th className="bt-0">Cliente</th>
              <th className="bt-0">Marca</th>
              <th className="text-right bt-0">Modelo</th>
              <th className="text-right bt-0">Tipo de Caixa</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <OrderTile key={order.Id} Order={order} />
            ))}
          </tbody>
        </rs.Table>
      </rs.Card>
    </section>
  );
}

export default OrdersList;
