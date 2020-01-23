import React from 'react';
import Character from './Character';
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
        {props.charactersArray.map(character => {
          return <Character character={character} key={character.ID}/>
        })}
      </div>
    </>
  )
}

const mapStateToProps = state => {
  return {
    charactersArray: state.charactersArray.Results
  };
};

export default connect(
  mapStateToProps,
  {}
)(CharacterList);