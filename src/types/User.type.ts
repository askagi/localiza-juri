export type Specialties =
  | "Criminal"
  | "Eleitoral"
  | "Imobiliario"
  | "Trabalhista"
  | "Tributário"
  | "Civil";

export type User = {
  id: string;
  name: string;
  image?: string;
  // description?: string;
  // city?: string;
  // state?: string;
  specialties?: Specialties[];
};
