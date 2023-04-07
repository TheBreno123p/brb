export interface Investimento {
  name: string;
  category: string;
  period: string;

  participant: string;
  admin: string;
  manager: string;

  fee: Fee;
  performance: Performance;
}

export interface Fee {
  max: number;
  entry: number;
  exit: number;
}

export interface Performance {
  method: string;
  benchmark: string;
  amount: number;
}
