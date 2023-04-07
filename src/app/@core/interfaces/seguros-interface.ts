export enum InsuranceType {
  AUTOMOTIVE = 'Carro/Moto',
  HOME = 'Imóvel',
  PERSONAL = 'Pessoal',
}

export interface Seguro {
  type: InsuranceType
  produto: string;
  code: number;
  coverage: Coverage;
}

export interface Coverage {
  type: string;
  min: number;
  max: number;

}
