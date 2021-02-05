import { useState } from "react";
import { SubmitTasksAction } from "../store/actions/TasksAction";
import { useSelector, useDispatch } from "react-redux";

function FormTask() {
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    let body = {
      category,
      title
    };
    dispatch(SubmitTasksAction("https://simul-3.herokuapp.com/tasks", body));
  };

  return (
    <>
      <form>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></input>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Category
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          ></input>
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </>
  );
}

export default FormTask;
