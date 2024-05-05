import { Button, Col, Form } from "react-bootstrap";
import { GoFilter, GoLaw } from "react-icons/go";
import { LuMapPin } from "react-icons/lu";
import Select, {
  ControlProps,
  MenuListProps,
  OptionProps,
  components,
} from "react-select";
import { SelectItem } from "../../types/Global.types";
import "./FormSearchLawyer.scss";
import { useFormSerachLawyerIds } from "./useFormSerachLawyerIds";

export function FormSearchLawyer() {
  const { expertsId, cityId } = useFormSerachLawyerIds();
  const experts: SelectItem[] = [
    { value: "administrativo", label: "Administrativo" },
    { value: "civil", label: "Civil" },
    { value: "criminal", label: "Criminal" },
    { value: "eleitoral", label: "Eleitoral" },
    { value: "imobiliario", label: "Imobiliario" },
    { value: "trabalhista", label: "Trabalhista" },
    { value: "tributario", label: "Tributário" },
  ];

  const cities: SelectItem[] = [
    { label: "Todos", value: "all" },
    { label: "Alagoinhas", value: "alagoinhas" },
    { label: "Aramari", value: "aramari" },
    { label: "Cardial da Silva", value: "cardial_da_silva" },
    { label: "Entre Rios", value: "entre_rios" },
    { label: "Esplanada", value: "esplanada" },
  ];

  return (
    <Form className="formSearchLawyer row m-0 gap-0 p-0">
      <Col md={7} sm={12}>
        <Select
          classNamePrefix={"formSearchLawyer__select"}
          isMulti
          id={expertsId}
          name="experts"
          options={experts}
          components={{ MenuList, Option: OptionExperts }}
          placeholder="Especialidades jurídica"
        />
      </Col>
      <Col md={4} sm={12}>
        <Select
          classNamePrefix={"formSearchLawyer__select"}
          id={cityId}
          name="cities"
          options={cities}
          components={{
            MenuList,
            Option: OptionCity,
            Control: ControlCity,
          }}
          placeholder="Cidade"
        />
      </Col>

      <Col md={1} sm={12}>
        <Button className="formSearchLawyer__btn" size="sm" variant="primary">
          <GoFilter />
          <span>Filtrar</span>
        </Button>
      </Col>
    </Form>
  );
}

const MenuList = (props: MenuListProps) => {
  return <components.MenuList {...props}>{props.children}</components.MenuList>;
};

const OptionExperts = (props: OptionProps) => {
  return (
    <components.Option {...props}>
      <GoLaw /> {props.children}
    </components.Option>
  );
};

const OptionCity = (props: OptionProps) => {
  return (
    <components.Option {...props}>
      <LuMapPin /> {props.children}
    </components.Option>
  );
};

const ControlCity = ({ children, ...props }: ControlProps) => {
  return (
    <components.Control className=" ps-2" {...props}>
      <LuMapPin />
      {children}
    </components.Control>
  );
};
