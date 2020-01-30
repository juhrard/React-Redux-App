import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import { fetchCharacter } from '../actions'
import { connect } from 'react-redux';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

// Actions
import { fetchFightData } from '../actions'

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  form: {
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'space-evenly'
  }
}));

const RankingSearchForm = props => {
  const classes = useStyles();
  const [job, setJob] = useState('');
  const [encounter, setEncounter] = useState('');

  const handleJobChanges = (e) => {
      setJob(e.target.value);
  }

  const handleEncounterChanges = (e) => {
    setEncounter(e.target.value);
}

  const handleSubmit = (e) => {
    e.preventDefault();
    props.fetchFightData(job, encounter);
    setJob('');
    setEncounter('');
  }

  return (
    <>
      <form className={classes.form} onSubmit={handleSubmit}>
        <FormControl className={classes.formControl}>
          <InputLabel id="job-select-label">Job</InputLabel>
          <Select
            labelId="job-select-label"
            id="job-select"
            value={job}
            onChange={handleJobChanges}
          >
            <MenuItem value={'5'}>Dragoon</MenuItem>
            <MenuItem value={'7'}>Monk</MenuItem>
            <MenuItem value={'15'}>Samurai</MenuItem>
            <MenuItem value={'8'}>Ninja</MenuItem>
            <MenuItem value={'16'}>Dancer</MenuItem>
            <MenuItem value={'2'}>Bard</MenuItem>
            <MenuItem value={'6'}>Machinist</MenuItem>
            <MenuItem value={'13'}>White Mage</MenuItem>
            <MenuItem value={'1'}>Astrologian</MenuItem>
            <MenuItem value={'10'}>Scholar</MenuItem>
            <MenuItem value={'14'}>Red Mage</MenuItem>
            <MenuItem value={'3'}>Black Mage</MenuItem>
            <MenuItem value={'11'}>Summoner</MenuItem>
            <MenuItem value={'17'}>Gunbreaker</MenuItem>
            <MenuItem value={'9'}>Paladin</MenuItem>
            <MenuItem value={'4'}>Dark Knight</MenuItem>
            <MenuItem value={'12'}>Warrior</MenuItem>
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel id="encounter-select-label">Fight</InputLabel>
          <Select
            labelId="encounter-select-label"
            id="encounter-select"
            value={encounter}
            onChange={handleEncounterChanges}
          >
            <MenuItem value={'65'}>Eden Prime</MenuItem>
            <MenuItem value={'66'}>Voidwalker</MenuItem>
            <MenuItem value={'67'}>Leviathan</MenuItem>
            <MenuItem value={'68'}>Titan</MenuItem>
            <MenuItem value={'1050'}>The Epic of Alexander</MenuItem>
          </Select>
        </FormControl>
        <Button variant="contained" color="primary" type="submit">Submit!</Button>
      </form>
    </>
  )
}

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    activity: state.activity,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { fetchFightData }
)(RankingSearchForm);