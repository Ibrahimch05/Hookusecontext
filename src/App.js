
import React from "react";
import { TaskProvider } from "./TaskContext";
import TaskList from "./TaskList";
import AddTask from "./AddTask";

const App = () => {
  return (
    <TaskProvider>
      <div>
        <h1>Gestion des tâches</h1>
        <AddTask />
        <TaskList />
      </div>
    </TaskProvider>
  );
};

export default App;
