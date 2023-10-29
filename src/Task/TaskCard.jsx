import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export default function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContext);

  return (
    <div className="bg-gray-800 text-white text-center p-3 rounded-md mb-8 m-5">
      <h1 className="font-bold text-xl capitalize">{task.title}</h1>
      <p className="capitalize text-gray-300">{task.description}</p>
      <button
        className="bg-red-500 rounded-md m-1 p-1 hover:bg-red-800 "
        onClick={() => deleteTask(task.id)}
      >
        Eliminar tarea
      </button>
    </div>
  );
}
