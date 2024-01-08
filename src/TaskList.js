import React from "react";
import { useTaskContext } from "./TaskContext";

const TaskList = () => {
  // Utilisation du hook personnalisé useTaskContext pour accéder au contexte
  const { tasks, deleteTask } = useTaskContext();

  return (
    <div>
      <h2>Liste des tâches</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.title}
            <button onClick={() => deleteTask(task.id)}>Supprimer</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
//useTaskContext : Utilisation du hook personnalisé pour accéder au contexte TaskContext. Récupération des données tasks (liste des tâches) et de la fonction deleteTask du contexte.

//Affichage des tâches : Utilisation de tasks.map pour parcourir la liste des tâches et afficher chaque tâche sous forme d'élément de liste <li>. Chaque élément de liste contient le titre de la tâche et un bouton "Supprimer" qui utilise la fonction deleteTask du contexte pour supprimer la tâche correspondante.

//AddTask.js   Ce composant permet d'ajouter de nouvelles tâches à la liste en utilisant le contexte TaskContext.
export default TaskList;
