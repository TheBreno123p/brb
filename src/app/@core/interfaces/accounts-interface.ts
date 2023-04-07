export interface Account {
  description: string;
  balance: number;
  color: string;
  icon?: string;
}

export interface Transaction {
  id: number;
  value: number;
  type: TRANSACTION;
  currency: string;
  paid: boolean;
  date: Date;
  description?: string;
  category: string;
  account: Account;
  attatchment?: any
}

export enum TRANSACTION {
  INCOME = "Income",
  EXPENSE = "Expense"
}
