import React from 'react';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner'

// Components
import Form from './Form';
import CharacterList from './CharacterList';

// Material-UI styles
const useStyles = makeStyles({
  container: {
    background: '#add7ff',
    borderRadius: 5,
    color: 'white',
    width: 800,
    padding: '50px'
  },

  loader: {
    marginTop: 50
  }
})

const Dashboard = props => {
  const classes = useStyles();
  return (
    <>
      <Container className={classes.container}>
        <Form/>
        {props.isLoading && <Loader className={classes.loader} type="Circles" color="#somecolor" height={80} width={80}/>}
        {!props.isLoading && props.charactersArray && <CharacterList/>}
        {props.error && <h2 style={{color: 'black'}}>{props.error}</h2>}
      </Container>
    </>
  )
}

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    activity: state.activity,
    error: state.error,
    charactersArray: state.charactersArray
  };
};

export default connect(
  mapStateToProps,
  {}
)(Dashboard);