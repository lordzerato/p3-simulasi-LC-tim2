const initialState = {
  fav: [],
  loading: false,
  error: null
};

const fetchFav = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "FETCH_ACTION_START":
      return {
        ...state,
        loading: true
      };
    case "FETCH_ACTION_DONE":
      return {
        ...state,
        favs: payload,
        loading: false
      };
    case "FETCH_ACTION_ERROR":
      return {
        ...state,
        loading: false,
        error: payload
      };
    default:
      return state;
  }
};

export default fetchFav;
