import axios from "axios";

function TasksAction(url) {
  return async (dispatch) => {
    try {
      dispatch({
        type: "FETCH_ACTION_START"
      });
      const response = await fetch(url);
      const data = await response.json();

      console.log(data, "data hasil fetch TaskAction");

      dispatch({
        type: "FETCH_ACTION_DONE",
        payload: data
      });
    } catch (err) {
      console.log(err, "error TaskAction");
      dispatch({
        type: "FETCH_ACTION_ERROR",
        payload: err
      });
    }
  };
}

function SubmitTasksAction(url, body) {
  return async (dispatch) => {
    try {
      dispatch({
        type: "POST_ACTION_START"
      });
      console.log(body, "ini body <------");
      const response = await fetch("https://simul-3.herokuapp.com/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
      });
      const data = await response.json();

      console.log(data, "data hasil post SubmitTasksAction");

      dispatch({
        type: "POST_ACTION_DONE",
        payload: data
      });
    } catch (err) {
      console.log(err, "error TaskAction");
      dispatch({
        type: "POST_ACTION_ERROR",
        payload: err
      });
    }
  };
}

function DeleteTasksAction(url, body) {
  return async (dispatch) => {
    try {
      dispatch({
        type: "DELETE_ACTION_START"
      });

      const response = await fetch(url, {
        method: "DELETE"
      });
      const data = await response.json();

      console.log(data);
      dispatch({
        type: "DELETE_ACTION_DONE"
      });
    } catch (err) {
      console.log(err, "error DeleteTasksAction");
      dispatch({
        type: "DELETE_ACTION_ERROR",
        payload: err
      });
    }
  };
}

export { TasksAction, SubmitTasksAction, DeleteTasksAction };
