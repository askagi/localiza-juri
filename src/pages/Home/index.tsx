import { Suspense } from "react";
import { Col, Container, Navbar, Row } from "react-bootstrap";
import { GoLaw } from "react-icons/go";
// import Logo from "../../assets/logo.jpg";
import { FormSearchLawyer } from "../../components/FormSearchLawyer/FormSearchLawyer";
import "./Home.scss";

export function Home() {
  return (
    <Suspense fallback={<h5>Carregando...</h5>}>
      <div className=" vh-100 ">
        <Navbar className="bg-success-subtle">
          <Container>
            <Navbar.Brand href="#home">
              <GoLaw size={42} />
              <strong className="ms-3">Localiza júri</strong>
            </Navbar.Brand>
          </Container>
        </Navbar>

        <Container fluid>
          <Row>
            <Col md={6} className="home__form">
              <Row className="justify-content-center px-5">
                <div className="home__form-text col-12 mb-5">
                  <h1 className="text-success display-4 fw-semibold ">
                    Encontre agora mesmo um especialista jurídico
                  </h1>
                  <h4 className="text-muted ps-1">
                    Aqui você encontra o júri ideal para sua demanda
                  </h4>
                </div>
                <FormSearchLawyer />
              </Row>

              {/* <Stack
                gap={5}
                className="align-items-center justify-content-center"
              > */}

              {/* </Stack> */}
            </Col>
            <Col
              md={6}
              className="home__apresentation d-md-block d-sm-none d-none d-sm-block"
            >
              {/* <div className="apresentation__img-box "></div> */}
              {/* <img src={Logo} alt="" className="img-fluid " /> */}
            </Col>
          </Row>
        </Container>
      </div>
    </Suspense>
  );
}
