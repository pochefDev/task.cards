import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import { useForm } from "react-hook-form";
import "./form.css"

export function TaskForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { createTask } = useContext(TaskContext);

  const onSubmit = (data) => {
    createTask(data);
    reset();
  };

  return (
    <div className="max-w-md mx-auto pb-1">
      <form onSubmit={handleSubmit(onSubmit)} className="p-10">
        <h1 className="text-2xl m-2 font-bold w-full text-white">
          Añade tu tarea
        </h1>
        <input
          className="bg-slate-500 p-3 w-full text-white"
          type="text"
          placeholder="Nombre de la tarea..."
          {...register("title", {
            required: true,
            maxLength: 18,
            minLength: 4,
          })}
        />
        {errors.title?.type === "required" && 
          <span className="text-yellow-500 font-mono">Completa campo</span>
        }
        {errors.title?.type === "maxLength" && 
          <span className="text-yellow-500 font-mono">Maximo 18 caracteres</span>
        }
        {errors.title?.type === "minLength" && 
          <span className="text-yellow-500 font-mono">Minimo 4 caracteres</span>
        }
        <textarea
          className="bg-slate-500 p-3 mt-4 w-full text-white"
          placeholder="Descripción..."
          {...register("des", {
            required: true,
            maxLength: 20,
            minLength: 8,
          })}
        ></textarea>

        {errors.des?.type === "required" && 
          <span className="text-yellow-500 font-mono">Completa campo</span>
        }
        {errors.des?.type === "maxLength" && 
          <span className="text-yellow-500 font-mono">Maximo 18 caracteres</span>
        }
        {errors.des?.type === "minLength" && 
          <span className="text-yellow-500 font-mono">Minimo 4 caracteres</span>
        }

        <button className="bg-lime-500 rounded-md p-2 mt-2 font-bold w-full text-center">
          Guardar
        </button>
      </form>
    </div>
  );
}
