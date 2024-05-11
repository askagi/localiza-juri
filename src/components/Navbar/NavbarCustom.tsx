import {
  Container,
  Nav,
  Navbar,
  Offcanvas,
  Stack,
  ToggleButton,
} from "react-bootstrap";
import { GoArrowRight, GoLaw } from "react-icons/go";
import { Link } from "react-router-dom";
import { ROUTER } from "../../App/router";

type NavbarCustomProps = {
  authenticated?: boolean;
  togglViewMode?: (mode: "list" | "map") => void;
  viewMode?: "list" | "map";
};

export function NavbarCustom({
  authenticated,
  togglViewMode,
  viewMode,
}: NavbarCustomProps) {
  return (
    <Navbar className="bg-body-secondary" expand="sm">
      <Container>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand`}
          aria-labelledby={`offcanvasNavbarLabel-expand`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand`}>
              Offcanvas
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              {togglViewMode && (
                <Stack direction="horizontal" gap={3} className="m-0 ">
                  <ToggleButton
                    id="listMode"
                    type="checkbox"
                    variant="outline-primary"
                    checked={viewMode === "list"}
                    value={"list"}
                    onClick={() => togglViewMode("list")}
                  >
                    Lista de advogados
                  </ToggleButton>
                  <ToggleButton
                    id="mapMode"
                    type="checkbox"
                    variant="outline-primary"
                    checked={viewMode === "map"}
                    value={"map"}
                    onClick={() => togglViewMode("map")}
                  >
                    Ver no mapa
                  </ToggleButton>
                </Stack>
              )}
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
        <Navbar.Brand href="#home" className="">
          <GoLaw size={42} />
          <strong className="ms-3">Localiza juri</strong>
        </Navbar.Brand>
        <div>
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
        </div>
      </Container>
    </Navbar>
  );
}
