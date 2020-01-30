import React from 'react';
import { Card } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// Material-UI styles
const useStyles = makeStyles({
  card: {
    background: 'white',
    color: 'black',
    width: 300,
    padding: '10px',
    margin: '10px'
  }
})

const Character = props => {
  const classes = useStyles();
  return (
    <>
      <Card className={classes.card}>
        <img src={props.character.Avatar} alt={props.character.Name}/>
        <h2>{props.character.Name}</h2>
        <p>Server: {props.character.Server}</p>
        <p>Language: {props.character.Lang}</p>
      </Card>
    </>
  )
}

export default Character