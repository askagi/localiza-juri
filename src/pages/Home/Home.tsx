import { LatLngExpression } from "leaflet";
import { Suspense, useEffect, useState } from "react";
import { Button, Col, Container, Form, Row, Stack } from "react-bootstrap";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import Select from "react-select";
import { CardCustom } from "../../components/Card/CardCustom";
import { Loading } from "../../components/Loading/Loading";
import { NavbarCustom } from "../../components/Navbar/NavbarCustom";
import { userMock } from "../../dataBase/user.mock";
import { User } from "../../types/User.type";
import "./Home.scss";

export function Home() {
  // fetch('https://randomuser.me/api/?results=10&nat=br')
  const [user, setUsers] = useState<User[]>(userMock);
  async function getUsers() {
    try {
      const response = await fetch(
        "https://randomuser.me/api/?results=100&nat=br"
      );
      const data = await response.json();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const formatedData: User[] = data.results.map((user: any) => ({
        id: user.login.uuid,
        name: `${user.name.first} ${user.name.last}`,
        image: user.picture.large,
      }));
      console.log("formated", formatedData);

      setUsers([...user, ...formatedData]);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <Suspense fallback={<Loading />}>
      <div className="home vh-100">
        <NavbarCustom authenticated />
        <Container fluid>
          <Row className="home__apresentation bg-body-secondary p-0">
            <div className="home__float-form bg-body border rounded rounded-3 ">
              <Stack gap={3} className=" h-100 py-5">
                <h4>Encontre o especialista ideal para sua necessidade.</h4>
                <Form className="d-flex flex-column gap-3 justify-content-between h-100 ">
                  <Stack gap={3}>
                    <Form.Control
                      type="text"
                      name="lawyer"
                      placeholder="Pesquisar"
                    />
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
                center={
                  { lat: -12.1343967, lng: -38.4675336 } as LatLngExpression
                }
                zoom={13}
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
          <Container>
            <Row className="home__form">{/* <FormSearchLawyer /> */}</Row>
          </Container>
          {/* <hr /> */}
          <Container>
            <Row className="home__list row-cols-1 row-cols-md-2 g-4">
              {user.length > 0 &&
                user.map((user) => (
                  <Col key={user.id}>
                    <CardCustom user={user} />
                  </Col>
                ))}
            </Row>
          </Container>
        </Container>
      </div>
    </Suspense>
  );
}
