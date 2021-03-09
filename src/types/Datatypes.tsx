import { type } from "os";

export type maintype = {
   transactions: transactiontype[]
   addTrans: (el: transactiontype) => void
   deleteTrans: (id: number) => void
}

export type transactiontype = {
   id: number
   text: string
   amount: number
}