import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import AddProject from "./components/AddProject";
import InitialPage from "./components/InitialPage";
import EmployeePage from "./components/EmployeePage";
import NavBar from "./components/NavBar";

function App() {
  const [tasks, setTasks] = useState([]);
  const [projects, setProjects] = useState([]);
  const [users, setUsers] = useState([])

  // let employees = users.filter(user => user.user_role == "employee")

  useEffect(() => {
    fetch("/tasks")
      .then((r) => r.json())
      .then((tasks) => setTasks(tasks));
  }, []);

  useEffect(() => {
    fetch("/projects")
      .then((r) => r.json())
      .then((projects) => setProjects(projects));
  }, []);

  useEffect(() => {
    fetch("/users")
      .then((r) => r.json())
      .then((users) => setUsers(users));
  }, []);

  function handleAddProject(newProject) {
    setProjects([...projects, newProject]);
  }

  function handleAddTask(newTask) {
    setTasks([...tasks, newTask]);
  }

  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/login">
          <InitialPage></InitialPage>
        </Route>
        <Route path="/employees">
          <EmployeePage users={users} setUsers={setUsers}>

          </EmployeePage>
        </Route>

        <Route exact path="/">
          <Dashboard></Dashboard>
        </Route>
        <Route path="/project/new">
          <AddProject
            onAddTask={handleAddTask}
            onAddProject={handleAddProject}
          ></AddProject>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
