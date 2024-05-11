import { Button, Col, Form, Row } from "react-bootstrap";
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
  const { expertsId, cityId, lawyerId } = useFormSerachLawyerIds();
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
    { label: "Cardeal da Silva", value: "cardeal_da_silva" },
    { label: "Entre Rios", value: "entre_rios" },
    { label: "Esplanada", value: "esplanada" },
  ];

  return (
    <Form className="formSearchLawyer col-12 m-0 gap-0 p-0">
      <Row>
        <Col md={7} sm={12}>
          <Select
            classNamePrefix={"formSearchLawyer__select"}
            id={expertsId}
            name="experts"
            options={experts}
            components={{
              MenuList,
              Option: OptionExperts,
              Control: ControlLawyer,
            }}
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
      </Row>

      <Row>
        <Col sm={11}>
          <Form.Control
            id={lawyerId}
            className="mt-2"
            type="search"
            placeholder="Pesquisar por advogado"
          />
        </Col>
        <Col md={1} sm={12}>
          <Button
            className="formSearchLawyer__btn d-flex gap-2 align-items-center"
            size="sm"
            variant="primary"
          >
            <GoFilter size={18} />
            <span className="">Filtrar</span>
          </Button>
        </Col>
      </Row>
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
      <LuMapPin color="#333333" /> {props.children}
    </components.Option>
  );
};

const ControlCity = ({ children, ...props }: ControlProps) => {
  return (
    <components.Control className=" ps-2" {...props}>
      <LuMapPin color="#333333" />
      {children}
    </components.Control>
  );
};

const ControlLawyer = ({ children, ...props }: ControlProps) => {
  return (
    <components.Control className=" ps-2" {...props}>
      <GoLaw color="#333333" />
      {children}
    </components.Control>
  );
};
