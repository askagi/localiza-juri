import { LatLngExpression } from "leaflet";
import { Button, Col, Form, Row, Stack } from "react-bootstrap";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import Select from "react-select";
import "./MapLawyers.scss";

export function MapLawyers() {
  return (
    <Row className="mapLawyers bg-body-secondary p-0">
      <div className="home__float-form bg-body border rounded rounded-3 ">
        <Stack gap={3} className=" h-100 py-5">
          <h4>Encontre o especialista ideal para sua necessidade.</h4>
          <Form className="d-flex flex-column gap-3 justify-content-between h-100 ">
            <Stack gap={3}>
              <Form.Control type="text" name="lawyer" placeholder="Pesquisar" />
              <Select
                // classNamePrefix={"formSearchLawyer__select"}
                name="experts"
                options={[]}
                placeholder="Especialidade"
              />
              <Select
                // classNamePrefix={"formSearchLawyer__select"}
                name="cities"
                options={[]}
                placeholder="Cidade"
              />
            </Stack>
            <Button>Filtrar</Button>
          </Form>
        </Stack>
      </div>
      <Col md={12} className="m-0 p-0">
        <MapContainer
          center={{ lat: -12.1343967, lng: -38.4675336 } as LatLngExpression}
          zoom={16}
          scrollWheelZoom={true}
          style={{ width: "100%", height: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker
            position={
              { lat: -12.1343967, lng: -38.4675336 } as LatLngExpression
            }
          >
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>

          <Marker position={{ lat: -12, lng: -38 } as LatLngExpression}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </Col>
    </Row>
  );
}
