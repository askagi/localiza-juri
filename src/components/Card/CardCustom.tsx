import { faker } from "@faker-js/faker";
import { Badge } from "react-bootstrap";
import { GoStar, GoStarFill } from "react-icons/go";
import { LuMapPin } from "react-icons/lu";
import { User } from "../../types/User.type";
import "./CardCustom.scss";
export type CardCustomProps = {
  user: User;
};

export function CardCustom({ user }: CardCustomProps) {
  console.log(user);

  return (
    <div className="cardCustom">
      <div className="cardCustom__card">
        <div className="cardCustom__img-box">
          <img
            src={user?.image}
            //   src="https://source.unsplash.com/random?lawyer?profile?face"
            className="img-fluid  d-md-block object-fit-cover"
            alt="..."
          />
        </div>
        <div className="cardCustom__body">
          <div className="p-0 p-md-2">
            <h5 className="">{user?.name}</h5>
            <div className=" mb-md-2 text-muted d-flex gap-1">
              {user?.specialties &&
                user?.specialties?.map((specialty) => (
                  <Badge key={specialty} pill className="bg-secondary">
                    {specialty}
                  </Badge>
                ))}
              {/* <Badge className="bg-secondary">Administrativo</Badge>
                <Badge bg="secondary">Imobiliario</Badge> */}
            </div>
            {/* <p className="">Uma breve descrição...</p> */}
            <p className="card-text">
              <span className="text-warning">
                <GoStarFill />
                <GoStarFill />
                <GoStarFill />
                <GoStarFill />
                <GoStar />
              </span>
              <small className="text-body-secondary ms-2">
                {faker.number.int({ min: 5, max: 800 })} avaliacões
              </small>
            </p>
            <p className="card-text">
              <small className="text-muted ms-2 d-flex align-items-center gap-1 ">
                <LuMapPin size={16} color="#333333" />
                {faker.number.int({ min: 5, max: 800 })} metros de você
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
