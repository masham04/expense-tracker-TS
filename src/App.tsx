import React from 'react';
import './App.css';
import { AddTransaction } from './components/AddTransction';
import {Balance} from './components/Balance';
import {History} from './components/History';
import {GlobalProvider} from './context/State';

function App() {
  
  navigator.serviceWorker.register('/sw.js');
  return (
   <GlobalProvider>
     <Balance />
     <History />
     <AddTransaction />
   </GlobalProvider>
   
  );
}

export default App;
