const initialState = {
  isLoading: false,
  activity: null,
  error: null,
  charactersArray: null,
  logsArray: null
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCHING_ACTIVITY_START":
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case 'FETCHING_DATA_SUCCESS':
      if(action.payload.Results.length > 0) {  
        return {
          ...state,
          charactersArray: action.payload,
          isLoading: false,
          error: null
        }
      } else {
        return {
          ...state,
          error: "No results found! Try again?",
          isLoading: false,
          charactersArray: null
        }
      }
    case 'FETCHING_LOGS_SUCCESS':
      return {
        ...state,
        logsArray: action.payload.rankings,
        isLoading: false,
        error: null
      }
    case 'FETCHING_DATA_FAIL':
      return {
        ...state,
        isLoading: false
      }
    default:
      return state;
  }
};