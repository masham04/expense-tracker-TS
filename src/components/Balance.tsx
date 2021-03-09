import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {GlobalContext} from './../context/State';
import CountUp from 'react-countup';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 2,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export function Balance() {
  const classes = useStyles();
  const {transactions} = useContext(GlobalContext);
  const amount: any[] = transactions.map((el: any) => el.amount);
  const totalbal = amount.reduce((el: number,al: number)=> (el += al),0).toFixed(2);
  const totalinc  = amount.filter((el: number) => el > 0).reduce((el: number,al: number)=> (el += al),0).toFixed(2);
  const totalexp = amount.filter((el: number) => el < 0).reduce((el: number,al: number)=> (el += al),0).toFixed(2);
  return (
    <div className={classes.root}>
      <h1 className='title'>Expense Tracker</h1>
      <Grid container spacing={3} style={{marginBottom: "5px"}}>
        
        <Grid item xs={12}>
          <Paper className={classes.paper} style={{backgroundColor: "#3F51B5",
        color: "white"}}><h2>Your Balance</h2>
          <h2>$<CountUp end={totalbal} /></h2>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper} style={{color: "#57AF51"}}><h3>Income</h3>
          <h3>$<CountUp end={totalinc} /></h3>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper} style={{color: "#E94135"}}><h3>Expense</h3>
          <h3>$<CountUp end={totalexp} /></h3></Paper>
        </Grid>
        
      </Grid>
    </div>
  );
}
