import { Container, Navbar } from "react-bootstrap";
import { GoLaw } from "react-icons/go";

export function NavbarCustom() {
  return (
    <Navbar className="bg-body-secondary ">
      <Container>
        <Navbar.Brand href="#home" className="m-auto">
          <GoLaw size={42} />
          <strong className="ms-3">Localiza júri</strong>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}
