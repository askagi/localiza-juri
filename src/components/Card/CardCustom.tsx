import { Badge, Card, Col, Row } from "react-bootstrap";
import "./CardCustom.scss";
type CardCustomProps = {
  user: {
    name: string;
    description?: string;
    image?: string;
    city?: string;
    state?: string;
    specialties?: string[];
  };
};

export function CardCustom({ user }: CardCustomProps) {
  console.log(user);

  return (
    <Col md={6} sm={12} className="cardCustom">
      <Card className="mb-3" style={{ height: "9.5rem" }}>
        <Row>
          <Col sm={4} style={{ height: "9.5rem" }}>
            <Card.Img
              style={{ height: "9.3rem" }}
              src={user?.picture?.large}
              //   src="https://source.unsplash.com/random?lawyer?profile?face"
              className="img-fluid  d-md-block object-fit-cover"
              alt="..."
            />
          </Col>
          <Col sm={8}>
            <Card.Body className="p-2">
              <Card.Title className="mb-3">{`${user?.name?.first} ${user?.name?.last}`}</Card.Title>
              <Card.Subtitle className="card-subtitle mb-2 text-muted d-flex gap-1">
                {["Administrativo", "Imobiliario"].map((specialty) => (
                  <Badge key={specialty} className="bg-secondary">
                    {specialty}
                  </Badge>
                ))}
                {/* <Badge className="bg-secondary">Administrativo</Badge>
                <Badge bg="secondary">Imobiliario</Badge> */}
              </Card.Subtitle>
              <Card.Text className="card-text">
                This is a wider card with supporting text below as a natural
              </Card.Text>
              {/* <p className="card-text">
                <small className="text-body-secondary">
                  Last updated 3 mins ago
                </small>
              </p> */}
            </Card.Body>
          </Col>
        </Row>
      </Card>
      {/* <div className="card  mb-3 ms-5 m-0 p-0" style={{ maxWidth: "540px" }}>
        <div className="row g-0 m-0 p-0">
          <div className="col-md-4">
            <img
              src="https://source.unsplash.com/random?profile"
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p className="card-text">
                <small className="text-body-secondary">
                  Last updated 3 mins ago
                </small>
              </p>
            </div>
          </div>
        </div>
      </div> */}
    </Col>
  );
}
