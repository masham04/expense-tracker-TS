import {transactiontype} from './../types/Datatypes';
type Actions =
| { type: "DELETE_TRANS"; payload: number }
| { type: "Add_TRANS"; payload: transactiontype };

const TransReducer = ((state: {transactions: transactiontype[]}, action: Actions) => {
   switch (action.type) {
       case 'Add_TRANS':
           return{
               
               transactions: [...state.transactions,action.payload]
           }
           case 'DELETE_TRANS':
           return{
               
               transactions: state.transactions.filter(el => el.id !== action.payload)
           }
   
       default:
           return state;
   }
})

export default TransReducer;