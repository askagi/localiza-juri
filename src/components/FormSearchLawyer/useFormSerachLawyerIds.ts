import { useId } from "react";

export function useFormSerachLawyerIds() {
  const expertsId = useId();
  const cityId = useId();
  const lawyerId = useId();
  return {
    expertsId,
    cityId,
    lawyerId,
  };
}
