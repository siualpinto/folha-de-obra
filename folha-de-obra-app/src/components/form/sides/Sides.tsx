import data from "../../../data/data.json";
import Input from "../../common/Inputs/Input";
import Select from "../../common/Select";

const Sides = () => {
  return (
    <>
      <h3>Laterais</h3>
      <div className="container">
        <div className="row">
          <div className="col">
            <Select
              id="Side"
              label="Tipos de Taipais"
              options={data["SideTypes"]}
            />
            <Input id="CentralColumns" label="Colunas Centrais" />
            <Input id="RearColumns" label="Colunas Traseiras" />
            <Input id="FrontColumns" label="Colunas Frontais" />
            <Select
              id="SupplementarySides"
              label="Taipais Suplementares"
              options={data["SupplementarySides"]}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sides;
