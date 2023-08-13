import Input from "./Input";
import Select from "./Select";
import brands from "../../data/brands.json";

function Form() {
  console.log(brands);
  return (
    <>
      <form>
        <Input id="clientName" label="Cliente" />
        <Input id="clientName" label="Cliente" />
        <Select id="marca" label="Marca" options={brands["Brands"]} />
      </form>
    </>
  );
}

export default Form;
