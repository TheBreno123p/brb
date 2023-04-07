import { InsuranceType, Seguro } from "../interfaces/seguros-interface";

export const SEGUROS: Array<Seguro> = [
  { type: InsuranceType.AUTOMOTIVE, produto: "Honda Civic", code: 1, coverage: { type: "Roubo total ou parcial", min: 0.01, max: 250000 } },
  { type: InsuranceType.AUTOMOTIVE, produto: "Honda HRV", code: 2, coverage: { type: "Roubo total ou parcial", min: 0.01, max: 175000 } },
  { type: InsuranceType.HOME, produto: "Apartamento", code: 3, coverage: { type: "Imóvel Básico", min: 0.01, max: 100000 } },
  { type: InsuranceType.PERSONAL, produto: "Invalidez", code: 4, coverage: { type: "Invalidez Permanente", min: 0.01, max: 25000 } },
]
