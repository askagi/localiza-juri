import { faker } from "@faker-js/faker";
import UserImg01 from "../assets/users/user-01.jpg";
import UserImg02 from "../assets/users/user-02.jpg";
import UserImg03 from "../assets/users/user-03.jpg";
import UserImg04 from "../assets/users/user-04.jpg";
import UserImg05 from "../assets/users/user-05.jpg";
import { User } from "../types/User.type";

export const userMock: User[] = [
  {
    id: faker.database.mongodbObjectId(),
    name: "Caíque Dos Santos Xavier",
    image: UserImg03,
    specialties: ["Criminal", "Civil"],
  },
  {
    id: faker.database.mongodbObjectId(),
    name: "Eliel José da Silva Ramos",
    image: UserImg04,
    specialties: ["Eleitoral", "Tributário"],
  },
  {
    id: faker.database.mongodbObjectId(),
    name: "Marcelle Eduarda Machado Barbosa",
    image: UserImg01,
    specialties: ["Criminal", "Trabalhista"],
  },
  {
    id: faker.database.mongodbObjectId(),
    name: "Rayane Pereira Rodrigues Argolo",
    image: UserImg02,
    specialties: ["Civil", "Trabalhista"],
  },
  {
    id: faker.database.mongodbObjectId(),
    name: "Regiane Teixeira da Silva",
    image: UserImg05,
    specialties: ["Imobiliario", "Tributário"],
  },
];
