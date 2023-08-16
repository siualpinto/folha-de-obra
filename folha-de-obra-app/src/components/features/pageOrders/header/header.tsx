import "./header.css";
import { actions } from "../../createOrder/formSlice";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import Form from "../../createOrder/form/Form";

function Header() {
  const dispatch = useDispatch();

  return (
    <header className="header">
      <div className="logo">
        <img
          src="favicon.ico"
          height="68"
          width="68"
          alt="Folha de Obra Logo"
        />
        <h1 className="title">Encomendas</h1>
      </div>
      <Button
        variant="secondary"
        size="lg"
        onClick={() => dispatch(actions.setIsOpen(true))}
      >
        Configurador
      </Button>
      <Form />
    </header>
  );
}

export default Header;
