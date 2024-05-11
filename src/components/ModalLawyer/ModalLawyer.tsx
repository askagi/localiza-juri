import { Button, Col, Modal, Row, Stack } from "react-bootstrap";
import { BsWhatsapp } from "react-icons/bs";
import { GoLaw } from "react-icons/go";
import { User } from "../../types/User.type";

type ModalLawyerProps = {
  user: User;
  show: boolean;
  handleClose: () => void;
};

export function ModalLawyer({ user, show, handleClose }: ModalLawyerProps) {
  console.log(user);

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title className="d-flex gap-2">
          <GoLaw size={32} />
          Informações
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col sm={4}>
            <img
              src={user.image}
              alt=""
              width={180}
              height={180}
              className="img-fluid rounded"
            />
          </Col>
          <Col>
            <h4>{user.name}</h4>
            <hr />
            <h6>Endereço:</h6>
            <p className="text-muted">
              Rua Mal. Deodoro, 118 - Centro, Alagoinhas - BA, 48005-020
            </p>
            <hr />
            <h6 className="mb-3">Contato:</h6>
            <Stack direction="horizontal">
              <a
                href="https://api.whatsapp.com/send?phone=12345678909876"
                className="d-flex gap-2 align-items-center btn btn-success"
                target="_blank"
              >
                <BsWhatsapp />
                Enviar mensagem
              </a>
            </Stack>
            <Button variant="link">adv@localiza_juri.com</Button>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Fechar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
