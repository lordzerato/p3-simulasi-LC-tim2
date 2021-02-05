import { Link } from "react-router-dom";

function Navbar() {
  return (
    <ul>
      <li>
        <Link to="/" className="btn btn-warning">
          Home
        </Link>
      </li>
      <li>
        <Link to="/create-task" className="btn btn-warning">
          Add Task
        </Link>
      </li>
    </ul>
  );
}

export default Navbar;
