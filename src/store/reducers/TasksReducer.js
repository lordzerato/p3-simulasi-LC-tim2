const initialState = {
  tasks: [],
  loading: false,
  error: null
};

const fetchTasks = (state = initialState, action) => {
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
        tasks: payload,
        loading: false
      };
    case "FETCH_ACTION_ERROR":
      return {
        ...state,
        loading: false,
        error: payload
      };
    case "POST_ACTION_DONE":
      return {
        ...state,
        tasks: state.tasks.concat({ tasks: payload }),
        loading: false
      };
    case "DELETE_ACTION_START":
      return {
        ...state
      };
    case "DELETE_ACTION_DONE":
      return {
        ...state
      };
    case "DELETE_ACTION_ERROR":
      return {
        ...state
      };
    case "POST_ACTION_ERROR":
      return {
        ...state,
        loading: false,
        error: payload
      };
    default:
      return state;
  }
};

export default fetchTasks;
