import React, { useState } from "react";
import { useTaskContext } from "./TaskContext";

const AddTask = () => {
  // État local pour stocker le titre de la nouvelle tâche
  const [taskTitle, setTaskTitle] = useState("");
  // Utilisation du hook personnalisé useTaskContext pour accéder au contexte
  const { addTask } = useTaskContext();

  // Gère l'ajoute d'une nouvelle tâche
  const handleAddTask = () => {
    const newTask = {
      id: Math.random(),
      title: taskTitle,
    };
    // Utilise addTask du contexte pour ajouter la nouvelle tâche
    addTask(newTask);
    // Réinitialise le titre de la tâche à une chaîne vide après l'ajout
    setTaskTitle("");
  };

  return (
    <div>
      <input
        type="text"
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
        placeholder="Ajouter une tâche"
      />
      <button onClick={handleAddTask}>Ajouter</button>
    </div>
  );
};

//État local (taskTitle) avec useState : Utilisation du hook useState pour gérer l'état local du titre de la nouvelle tâche à ajouter.

//useTaskContext : Utilisation du hook personnalisé pour accéder au contexte TaskContext. Récupération de la fonction addTask du contexte.

//handleAddTask : Cette fonction est appelée lorsqu'un utilisateur clique sur le bouton "Ajouter". Elle crée un objet représentant la nouvelle tâche avec un ID aléatoire, utilise la fonction addTask du contexte pour ajouter la nouvelle tâche à la liste (tasks) et réinitialise le champ de saisie du titre de la tâche à une chaîne vide après l'ajout.

export default AddTask;
