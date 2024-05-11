import { LatLngExpression } from "leaflet";
import { Suspense } from "react";
import { Button, Col, Form, Row, Stack } from "react-bootstrap";
import { GoLaw } from "react-icons/go";
import { LuMapPin } from "react-icons/lu";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import Select, {
  ControlProps,
  MenuListProps,
  OptionProps,
  components,
} from "react-select";
import { Position } from "../../pages/Home/Home";
import { SelectItem } from "../../types/Global.types";
import { User } from "../../types/User.type";
import "./MapLawyers.scss";

type MapLawyersProps = {
  userPosition?: Position;
  users: User[];
};

export function MapLawyers({ userPosition, users }: MapLawyersProps) {
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
    <Row className="map-lawyers  bg-body-secondary p-0">
      <div className="map-lawyers__float-form border rounded rounded-3 d-none d-md-block">
        <Stack gap={3} className=" h-100 py-5 px-4">
          <h4 className="mb-5">
            Encontre o especialista ideal para sua necessidade.
          </h4>
          <Form className="d-flex flex-column gap-3 justify-content-between h-100 ">
            <Stack gap={3}>
              <Form.Control type="text" name="lawyer" placeholder="Pesquisar" />
              <Select
                // classNamePrefix={"formSearchLawyer__select"}
                name="experts"
                options={experts}
                placeholder="Especialidade"
                components={{
                  MenuList,
                  Option: OptionExperts,
                  Control: ControlLawyer,
                }}
              />
              <Select
                // classNamePrefix={"formSearchLawyer__select"}
                name="cities"
                options={cities}
                placeholder="Cidade"
                components={{
                  MenuList,
                  Option: OptionCity,
                  Control: ControlCity,
                }}
              />
            </Stack>
            <Button>Filtrar</Button>
          </Form>
        </Stack>
      </div>
      <Col md={12} className="m-0 p-0">
        <Suspense>
          <MapContainer
            center={
              {
                lat: userPosition?.latitude,
                lng: userPosition?.longitude,
              } as LatLngExpression
            }
            zoom={15}
            scrollWheelZoom={true}
            style={{ width: "100%", height: "100%" }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {users.length > 0 &&
              users.map((user) => (
                <Marker
                  title={user.name}
                  key={user.id}
                  position={
                    {
                      lat: user.position?.lat,
                      lng: user.position?.lng,
                    } as LatLngExpression
                  }
                >
                  <Popup>
                    <div>
                      <img
                        className="rounded rounded-circle object-fit-cover"
                        src={user.image}
                        width={120}
                        height={120}
                        alt=""
                      />
                    </div>
                  </Popup>
                </Marker>
              ))}
          </MapContainer>
        </Suspense>
      </Col>
    </Row>
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
