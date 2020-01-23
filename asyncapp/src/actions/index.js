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
    .catch(error => console.log(error));
  };
};

const thunk = action => next => store => {
  if (typeof action === "function") {
    action();
  } else if (typeof action === "object") {
    next(action);
  }
};