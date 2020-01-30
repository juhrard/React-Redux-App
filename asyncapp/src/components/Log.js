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
        <h2>{props.character.name}</h2>
        <p>Server: {props.character.serverName}</p>
        <p>Guild: {props.character.guildName}</p>
        <p>Region: {props.character.regionName}</p>
        <p>RDPS: {props.character.total}</p>
      </Card>
    </>
  )
}

export default Character