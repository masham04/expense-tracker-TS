import React, { createContext, useReducer } from 'react';
import TransReducer from './Addreducer';
import {maintype,transactiontype} from './../types/Datatypes';

const initialState: maintype = {
    transactions: [
        
    ],
    addTrans(){},
    deleteTrans(){}
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider: React.FC = ({children}: any) => {

 let [state, dispatch] = useReducer(TransReducer,initialState);

 const addTrans = (transobj: transactiontype) => {
   dispatch({
         type: 'Add_TRANS',
         payload: transobj
   });
 }
 const deleteTrans = (id: number) => {
     dispatch({
            type: 'DELETE_TRANS',
            payload: id

     });
 }
 
    return (
        <GlobalContext.Provider value={{transactions: state.transactions,addTrans,deleteTrans}}>
              {children}
        </GlobalContext.Provider>
    )
}
