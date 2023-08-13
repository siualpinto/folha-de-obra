import InputFormComponent from "./InputFormComponent";
import SelectFormComponent from "./SelectFormComponent";
import brands from "../../data/brands.json";

function Form() {
  console.log(brands);
  return (
    <>
      <form>
        <InputFormComponent id="clientName" label="Cliente" />
        <InputFormComponent id="clientName" label="Cliente" />
        <SelectFormComponent
          id="marca"
          label="Marca"
          options={brands["Brands"]}
        />
      </form>
    </>
  );
}

export default Form;
