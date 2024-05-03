import { Button, Form, Stack } from "react-bootstrap";
import { GoLaw, GoSearch } from "react-icons/go";
import { LuMapPin } from "react-icons/lu";
import Select, {
  ControlProps,
  MenuListProps,
  OptionProps,
  components,
} from "react-select";
import { SelectItem } from "../../types/Global.types";
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
    <Form className="col">
      <Select
        className="row col-12 mb-3"
        isMulti
        id={expertsId}
        name="experts"
        options={experts}
        styles={{
          control: (styles) => ({
            ...styles,
            width: "100%",
            height: "52px",
            // marginBottom: "15px",
          }),
        }}
        components={{ MenuList, Option: OptionExperts }}
        placeholder="Selecione especialidades juridicas"
      />

      <Select
        className="row col-12 mb-3"
        id={cityId}
        name="cities"
        options={cities}
        styles={{
          control: (styles) => ({ ...styles, width: "100%", height: "52px" }),
        }}
        components={{
          MenuList,
          Option: OptionCity,
          Control: ControlCity,
          Input: () => null,
        }}
        placeholder="Selecione cidades"
      />

      <Button className="row col-12 py-3" variant="success">
        <Stack
          direction="horizontal"
          className="align-items-center justify-content-center"
          gap={2}
        >
          <GoSearch size={24} />
          Pesquisar
        </Stack>
      </Button>
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
    <components.Control className="FormSearchLawyer ps-2" {...props}>
      <LuMapPin />
      {children}
    </components.Control>
  );
};
