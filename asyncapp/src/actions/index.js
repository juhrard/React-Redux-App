import axios from "axios";

export const fetchCharacter = (term) => {
  return dispatch => {
    dispatch({ type: "FETCHING_ACTIVITY_START" });
    axios
    .get(`https://xivapi.com/character/search?name=${term}`)
    .then(response => {
      console.log(response);
      dispatch({type: 'FETCHING_DATA_SUCCESS', payload: response.data})
    })
    .catch(error => {
      console.log(error);
      dispatch({type: 'FETCHING_DATA_FAIL', payload: error})
    });
  };
};

export const fetchFightData = (job, encounter) => {
  return dispatch => {
    dispatch({ type: "FETCHING_ACTIVITY_START" });
    axios
    .get(`https://www.fflogs.com:443/v1/rankings/encounter/${encounter}?difficulty=100&class=Global&spec=${job}&api_key=8f555933adf5f9c8fe79da701a8cc969`)
    .then(response => {
      console.log(response);
      dispatch({type: 'FETCHING_LOGS_SUCCESS', payload: response.data})
    })
    .catch(error => {
      console.log(error);
      dispatch({type: 'FETCHING_LOGS_FAIL', payload: error})
    });
  };
};

const thunk = action => next => store => {
  if (typeof action === "function") {
    action();
  } else if (typeof action === "object") {
    next(action);
  }
};