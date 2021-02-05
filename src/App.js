import "./styles.css";

import Tasks from "./views/Tasks";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

import Navbar from "./components/Navbar";
import FormTask from "./views/FormTask";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Tasks />
        </Route>
        <Route exact path="/create-task">
          <FormTask />
        </Route>
      </Switch>
    </Router>
  );
}
