import React from 'react';
import Log from './Log';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

// Material-UI styles
const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexFlow: 'row wrap'
  }
})

const CharacterList = props => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.container}>
        {props.logsArray.map(character => {
          return <Log character={character} key={character.startTime}/>
        })}
      </div>
    </>
  )
}

const mapStateToProps = state => {
  return {
    logsArray: state.logsArray
  };
};

export default connect(
  mapStateToProps,
  {}
)(CharacterList);