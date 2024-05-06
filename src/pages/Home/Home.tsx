import { Suspense, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { CardCustom } from "../../components/Card/CardCustom";
import { FormSearchLawyer } from "../../components/FormSearchLawyer/FormSearchLawyer";
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
        "https://randomuser.me/api/?results=100&nat=br&state=bahia"
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
    <Suspense fallback={<h5>Carregando...</h5>}>
      <div className=" vh-100">
        <NavbarCustom authenticated />
        <Container fluid>
          <Row className="home__apresentation">
            <span className="display-5 text-center fw-normal  ">
              Encontre o especialista ideal para sua necessidade.
            </span>
          </Row>
          <Container>
            <Row className="home__form">
              <FormSearchLawyer />
            </Row>
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
