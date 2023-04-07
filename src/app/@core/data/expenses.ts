import { TRANSACTION, Transaction } from "../interfaces/accounts-interface";
import { ACCOUNTS } from "./accounts";


export const EXPENSES: Array<Transaction> = [
  { id: 1, value: 91.20, type: TRANSACTION.INCOME, currency: 'pt-br', paid: true, date: new Date(), category: 'House', account: ACCOUNTS[1] },
  { id: 2, value: 30, type: TRANSACTION.EXPENSE, currency: 'pt-br', paid: false, date: new Date(), category: 'House', account: ACCOUNTS[2] },
  { id: 3, value: 5121.32, type: TRANSACTION.INCOME, currency: 'pt-br', paid: false, date: new Date(), category: 'Restaurant', account: ACCOUNTS[1] },
  { id: 4, value: 19.99, type: TRANSACTION.EXPENSE, currency: 'pt-br', paid: true, date: new Date(), category: 'Restaurant', account: ACCOUNTS[0] },
  { id: 5, value: 650, type: TRANSACTION.EXPENSE, currency: 'pt-br', paid: true, date: new Date(), category: 'House', account: ACCOUNTS[0] },
  { id: 6, value: 350, type: TRANSACTION.EXPENSE, currency: 'pt-br', paid: false, date: new Date(), category: 'Transportation', account: ACCOUNTS[1] },
  { id: 7, value: 32, type: TRANSACTION.INCOME, currency: 'pt-br', paid: true, date: new Date(), category: 'Transportation', account: ACCOUNTS[1] },
  { id: 8, value: 71, type: TRANSACTION.EXPENSE, currency: 'pt-br', paid: false, date: new Date(), category: 'Transportation', account: ACCOUNTS[2] },
]
