import React,{ useContext, useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {GlobalContext} from './../context/State';

export function AddTransaction() {
  const {addTrans} = useContext(GlobalContext);
  let [text,settext] = useState('');
  let [amount,setamount] = useState();

const submission = (el:{ preventDefault: () => void; }) => {
   el.preventDefault();
   const inputtransaction = {
   id: Math.floor(Math.random()*100000),
   text,
   amount: Number(amount)
  }
  addTrans(inputtransaction);
  settext('');
  setamount(null);
}


  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Button id='btn' color="primary" onClick={handleClickOpen}>
       +
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add Transaction</DialogTitle>
        <form onSubmit={submission}>
        <DialogContent>
          <label>Enter Transaction</label>
          <input
            autoFocus
            required
            value={text}
            onChange={(el) => {settext(el.target.value)}}
            id="name"
            type="text"
          />
          <label>Enter Amount</label>
          <input                    
            value={amount}
            onChange={(el) => {setamount(Number(el.target.value))}}         
            type="number"
          />
          <br /><br/>
          <DialogContentText>
            Note: Negative sign for Expense
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} type='submit' color="primary">
            Add
          </Button>
        </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}
