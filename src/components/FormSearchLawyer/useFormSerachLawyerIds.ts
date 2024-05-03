import { useId } from "react";

export function useFormSerachLawyerIds() {
  const expertsId = useId();
  const cityId = useId();
  return {
    expertsId,
    cityId,
  };
}
