export interface Produto {
  empresa: string;
  tipo_conta: string;
  taxa: Taxa;
  indexer: InterestRate;
}

export interface Taxa {
  name: string;
  price: number;
  minimum: number;
  maximum: number;
}

export interface InterestRate {
  indexer: string;
  rate: number;
  minimum: number;
  maximum: number;
}

export interface Applications {
  interval: string;
}
