import { Col, Container, Row } from "react-bootstrap";
import { User } from "../../types/User.type";
import { CardCustom } from "../Card/CardCustom";
import { FormSearchLawyer } from "../FormSearchLawyer/FormSearchLawyer";

type ListLawyersCardProps = {
  users: User[];
};

export function ListLawyersCard({ users }: ListLawyersCardProps) {
  return (
    <div>
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
              <Col key={user.id}>
                <CardCustom user={user} />
              </Col>
            ))}
        </Row>
      </Container>
    </div>
  );
}
