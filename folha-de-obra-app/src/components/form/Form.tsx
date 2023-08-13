import Input from "./Input";
import Select from "./Select";
import data from "../../data/data.json";

function Form() {
  console.log(data);
  return (
    <>
      <form>
        <Input id="client" label="Cliente" />
        <Input id="person" label="Pessoa de contacto" />
        <Select id="brand" label="Marca" options={data["Brands"]} />
      </form>
    </>
  );
}

export default Form;
