import React, { createContext, useContext, useState } from "react";
// Création du contexte TaskContext
const TaskContext = createContext();
// Hook personnalisé pour utiliser le contexte TaskContext dans d'autres composants
export const useTaskContext = () => {
  return useContext(TaskContext);
};

// Provider du contexte TaskContext
export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  // Fonction pour ajouter une tâche à la liste
  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  // Fonction pour supprimer une tâche de la liste
  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };
  // Fournit le contexte et les fonctions aux composants enfants
  return (
    <TaskContext.Provider value={{ tasks, addTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
};
