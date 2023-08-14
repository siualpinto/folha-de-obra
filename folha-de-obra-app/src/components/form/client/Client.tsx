import Input from "../../common/Inputs/Input";

const Client = () => {
  return (
    <>
      <div className="col-md-3">
        <h3>Cliente</h3>
        <Input id="ClientName" label="Nome" />
        <Input id="PersonName" label="Pessoa de contacto" />
        <Input id="Email" label="Email" />
        <Input id="Phone" inputType="number" label="Telemovel" />
      </div>
    </>
  );
};

export default Client;
