import { Suspense } from "react";
import { Col, Container, Row } from "react-bootstrap";
// import Logo from "../../assets/logo.jpg";
import { LoginForm } from "../../components/LoginForm/LoginForm";
import "./login.scss";

import DestinationIllustration from "../../assets/destination.svg";
import { NavbarCustom } from "../../components/Navbar/NavbarCustom";

export function Login() {
  return (
    <Suspense fallback={<h5>Carregando...</h5>}>
      <div className=" vh-100">
        <NavbarCustom />
        <Container fluid>
          <Row>
            <Col md={6} className="login__form">
              <Row className="justify-content-center px-5">
                {/* <div className="home__form-text col-12 mb-5">
                  <h1 className="display-4 fw-semibold ">
                    Encontre agora mesmo um especialista jurídico
                  </h1>
                  <h4 className="text-muted ps-1">
                    Aqui você encontra o juri ideal para sua demanda
                  </h4>
                </div> */}
                <div className="home__form-text col-12 mb-5">
                  <h1 className="display-6 fw-semibold">
                    Faça login para encontrar um especialista jurídico
                  </h1>
                </div>
                <div className="">
                  <LoginForm />
                </div>
                <div className="text-center mt-4">
                  <span className="text-muted">Ainda não tem conta?</span>
                  <a href="#">Faça seu cadastro!</a>
                </div>
              </Row>

              {/* <Stack
                gap={5}
                className="align-items-center justify-content-center"
              > */}

              {/* </Stack> */}
            </Col>
            <Col
              md={6}
              className="login__apresentation p-0  d-md-flex d-sm-none d-none d-sm-flex justify-content-center align-items-center"
            >
              <img
                src={DestinationIllustration}
                alt=""
                className="img-fluid "
              />
            </Col>
          </Row>
        </Container>
      </div>
    </Suspense>
  );
}
