const initialState = {
  isLoading: false,
  activity: null,
  error: null,
  charactersArray: null,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCHING_ACTIVITY_START":
      return {
        ...state,
        isLoading: true
      };
    case 'FETCHING_DATA_SUCCESS':
      if(action.payload.length > 0) {  
        return {
          ...state,
          charactersArray: action.payload,
          isLoading: false
        }
      } else {
        return {
          ...state,
          error: "No results found! Try again?",
          isLoading: false
        }
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