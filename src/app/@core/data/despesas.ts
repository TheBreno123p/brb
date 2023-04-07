import { Despesa } from "../interfaces/fatura-interface";

const random = () => Math.random() * 100
const descriptions = [
  "Restaurante",
  "Transporte",
  "Pet",
  "Viagem",
  "Despesa",
]

const randomElement = () => descriptions[Math.floor(Math.random() * descriptions.length)];

export const DESPESAS: Array<Despesa> = [
  { date: new Date(), description: randomElement(), value: random() },
  { date: new Date(), description: randomElement(), value: random() },
  { date: new Date(), description: randomElement(), value: random() },
  { date: new Date(), description: randomElement(), value: random() },
  { date: new Date(), description: randomElement(), value: random() },
  { date: new Date(), description: randomElement(), value: random() },
  { date: new Date(), description: randomElement(), value: random() },
  { date: new Date(), description: randomElement(), value: random() },
  { date: new Date(), description: randomElement(), value: random() },
  { date: new Date(), description: randomElement(), value: random() },
  { date: new Date(), description: randomElement(), value: random() },
  { date: new Date(), description: randomElement(), value: random() },
  { date: new Date(), description: randomElement(), value: random() },
  { date: new Date(), description: randomElement(), value: random() },
  { date: new Date(), description: randomElement(), value: random() },
  { date: new Date(), description: randomElement(), value: random() },
  { date: new Date(), description: randomElement(), value: random() },
  { date: new Date(), description: randomElement(), value: random() },
]
