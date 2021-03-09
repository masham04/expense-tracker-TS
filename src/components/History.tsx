import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import {GlobalContext} from './../context/State';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}));


export function History() {
  const classes = useStyles();
  const {transactions} = useContext(GlobalContext);
  const {deleteTrans} = useContext(GlobalContext);

  return (
    
    <List className={classes.root}>
      <h2>Recent Transactions</h2>
      {transactions.map(el => (
        <ListItem key={el.id}>
        <ListItemAvatar>
          <Avatar>
            {el.amount < 0 ? '-' : '+'}
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={el.text} secondary={el.amount} />
        <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete">
                      <DeleteIcon onClick={() => deleteTrans(el.id)} />
                    </IconButton>
                  </ListItemSecondaryAction>
      </ListItem>
      ))}
      
    </List>

  );
}
