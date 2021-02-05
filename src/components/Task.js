import { DeleteTasksAction } from "../store/actions/TasksAction";
import { useDispatch } from "react-redux";
function Task(props) {
  const dispatch = useDispatch();
  const deleteTask = (e) => {
    e.preventDefault();
    dispatch(DeleteTasksAction);
  };

  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{props.task.title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{props.task.category}</h6>
        <button class="btn btn-danger" type="submit" onClick={deleteTask}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default Task;
