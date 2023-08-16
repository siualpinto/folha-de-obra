import "./Header.css";
import { actions } from "../../createOrder/formSlice";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";

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
        onClick={() => dispatch(actions.setIsOpen())}
      >
        Configurador
      </Button>
    </header>
  );
}

export default Header;
