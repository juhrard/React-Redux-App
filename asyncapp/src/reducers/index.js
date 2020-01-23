const initialState = {
  isLoading: false,
  activity: null,
  error: "",
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
      return {
        ...state,
        charactersArray: action.payload,
        isLoading: false
      }
    default:
      return state;
  }
};