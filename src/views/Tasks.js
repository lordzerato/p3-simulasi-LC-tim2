import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { TasksAction } from "../store/actions/TasksAction";
import Task from "../components/Task";

function Tasks() {
  const dispatch = useDispatch();
  const { tasks, loading, error } = useSelector((state) => state.task);

  useEffect((_) => {
    dispatch(TasksAction("https://simul-3.herokuapp.com/tasks"));
  }, []);

  if (error) return <h2>Error, {error}</h2>;
  else if (loading) return <h2>Loading Fetch data</h2>;
  else
    return (
      <div className="container">
        <div className="row">
          {tasks.map((task) => {
            return <Task task={task} />;
          })}
          <div className="col">
            {/* <h4>{JSON.stringify(tasks)}</h4> */}
            {/* <h4>Category</h4> */}
          </div>
        </div>
      </div>
    );
}

export default Tasks;
