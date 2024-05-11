import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { User } from "../../types/User.type";
import { CardCustom } from "../Card/CardCustom";
import { FormSearchLawyer } from "../FormSearchLawyer/FormSearchLawyer";
import { ModalLawyer } from "../ModalLawyer/ModalLawyer";
import "./listLawyersCard.scss";

type ListLawyersCardProps = {
  users: User[];
};

export function ListLawyersCard({ users }: ListLawyersCardProps) {
  const [showModalLawyer, setShowModalLawyer] = useState({
    show: false,
    user: {} as User,
  });

  return (
    <div className="listLawyerCard">
      <ModalLawyer
        show={showModalLawyer.show}
        handleClose={() =>
          setShowModalLawyer({ ...showModalLawyer, show: false })
        }
        user={showModalLawyer.user}
      />

      <Container>
        <Row className="home__form">
          <FormSearchLawyer />
        </Row>
      </Container>
      {/* <hr /> */}
      <Container>
        <Row className="home__list row-cols-1 row-cols-md-2 g-4">
          {users.length > 0 &&
            users.map((user) => (
              <Col
                key={user.id}
                onClick={() => setShowModalLawyer({ show: true, user })}
              >
                <CardCustom user={user} />
              </Col>
            ))}
        </Row>
      </Container>
    </div>
  );
}
