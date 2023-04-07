import { Produto } from "src/app/@core/interfaces/produtos-interface";

const EMPRESA: string = "BRB";

const random = () => Math.random() * 1000 * 10

export const PRODUTOS: Array<Produto> = [
  { empresa: EMPRESA, tipo_conta: "Emprestimo Pessoal", taxa: { name: "Taxa", price: random(), minimum: random(), maximum: random() }, indexer: { indexer: "PRE FIXADO", rate: 0.15, minimum: 0.0456, maximum: 0.685 } },
  { empresa: EMPRESA, tipo_conta: "Emprestimo Pessoal", taxa: { name: "Taxa", price: random(), minimum: random(), maximum: random() }, indexer: { indexer: "PRE FIXADO", rate: 0.15, minimum: 0.0456, maximum: 0.685 } },
  { empresa: EMPRESA, tipo_conta: "Emprestimo Pessoal", taxa: { name: "Taxa", price: random(), minimum: random(), maximum: random() }, indexer: { indexer: "PRE FIXADO", rate: 0.15, minimum: 0.0456, maximum: 0.685 } },
  { empresa: EMPRESA, tipo_conta: "Emprestimo Pessoal", taxa: { name: "Taxa", price: random(), minimum: random(), maximum: random() }, indexer: { indexer: "PRE FIXADO", rate: 0.15, minimum: 0.0456, maximum: 0.685 } },
  { empresa: EMPRESA, tipo_conta: "Emprestimo Pessoal", taxa: { name: "Taxa", price: random(), minimum: random(), maximum: random() }, indexer: { indexer: "PRE FIXADO", rate: 0.15, minimum: 0.0456, maximum: 0.685 } },
]
