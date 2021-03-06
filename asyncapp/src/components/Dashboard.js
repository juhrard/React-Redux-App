import React from 'react';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import Loader from 'react-loader-spinner'

// Components
import CharacterSearchForm from './CharacterSearchForm';
import CharacterList from './CharacterList';
import RankingSearchForm from './RankingSearchForm';
import LogsList from './LogsList';

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
        <Switch>
          <Route path="/characters">
            <CharacterSearchForm/>
            {props.isLoading && <Loader className={classes.loader} type="Circles" color="#somecolor" height={80} width={80}/>}
            {!props.isLoading && props.charactersArray && <CharacterList/>}
            {props.error && <h2 style={{color: 'black'}}>{props.error}</h2>}
          </Route>
          <Route path="/jobs">
            <RankingSearchForm/>
            {props.isLoading && <Loader className={classes.loader} type="Circles" color="#somecolor" height={80} width={80}/>}
            {!props.isLoading && props.logsArray && <LogsList/>}
            {props.error && <h2 style={{color: 'black'}}>{props.error}</h2>}
          </Route>
          <Route path="/">
            <h1 style={{color: 'black'}}>Welcome! Please choose a category.</h1>
          </Route>
        </Switch>
      </Container>
    </>
  )
}

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    activity: state.activity,
    error: state.error,
    charactersArray: state.charactersArray,
    logsArray: state.logsArray
  };
};

export default connect(
  mapStateToProps,
  {}
)(Dashboard);