import { Suspense, useEffect, useState } from "react";
import { Container, Navbar, Row } from "react-bootstrap";
import { GoLaw } from "react-icons/go";
import { CardCustom, CardCustomProps } from "../../components/Card/CardCustom";
import { FormSearchLawyer } from "../../components/FormSearchLawyer/FormSearchLawyer";
import "./Home.scss";
type User = CardCustomProps["user"];
export function Home() {
  // fetch('https://randomuser.me/api/?results=10&nat=br')
  const [user, setUsers] = useState<User[]>([]);
  async function getUsers() {
    try {
      const response = await fetch(
        "https://randomuser.me/api/?results=10&nat=br&state=bahia"
      );
      const data = await response.json();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const formatedData: User[] = data.results.map((user: any) => ({
        id: user.login.uuid,
        name: `${user.name.first} ${user.name.last}`,
        image: user.picture.large,
      }));
      console.log("formated", formatedData);

      setUsers(formatedData);
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
        <Navbar className="bg-body-secondary ">
          <Container>
            <Navbar.Brand href="#home" className="m-auto">
              <GoLaw size={42} />
              <strong className="ms-3">Localiza júri</strong>
            </Navbar.Brand>
          </Container>
        </Navbar>
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
            <Row className="home__list">
              {user.length > 0 &&
                user.map((user) => <CardCustom key={user.id} user={user} />)}
            </Row>
          </Container>
        </Container>
      </div>
    </Suspense>
  );
}
