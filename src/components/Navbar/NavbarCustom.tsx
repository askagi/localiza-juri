import { Container, Navbar } from "react-bootstrap";
import { GoArrowRight, GoLaw } from "react-icons/go";
import { Link } from "react-router-dom";
import { ROUTER } from "../../App/router";

type NavbarCustomProps = {
  authenticated?: boolean;
};

export function NavbarCustom({ authenticated }: NavbarCustomProps) {
  return (
    <Navbar className="bg-body-secondary ">
      <Container>
        <Navbar.Brand href="#home" className="m-auto">
          <GoLaw size={42} />
          <strong className="ms-3">Localiza júri</strong>
        </Navbar.Brand>
        {authenticated && (
          <div>
            <Link
              className="text-black fw-semibold btn btn-outline-secondary btn-sm"
              to={ROUTER.login}
            >
              Sair <GoArrowRight size={20} />
            </Link>
          </div>
        )}
      </Container>
    </Navbar>
  );
}
