import Input from "../../common/Input";

const Client = () => {
  return (
    <>
      <h3>Cliente</h3>
      <Input id="ClientName" label="Nome" />
      <Input id="PersonName" label="Pessoa de contacto" />
      <Input id="Email" label="Email" />
      <Input id="Phone" inputType="number" label="Telemovel" />
    </>
  );
};

export default Client;
