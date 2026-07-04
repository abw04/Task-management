import { AddTaskForm } from "@/modules/task/components/add-task-form";
import { TaskCard } from "@/modules/task/components/task-card";
import { tasksData } from "@/modules/task/task.data";
import { useState } from "react";
import type { Task } from "./modules/task/task.type";

export default function App() {
  const [tasks, setTasks] =useState<Task[]>(tasksData)

  // function addTask(id:number) {
  //   const newTask = {
  //     id: tasksData.length > 0 ?
  //   }
  //   setTasks({...tasks, newTask})
  // }

  function deleteTask(id:number) {
        setTasks(tasks.filter((task) => task.id !== id));
  }

  return (
    <div className="max-w-xl mx-auto bg-cyan-600 min-h-screen">
      <h1 className="text-3xl mx-2 pt-4 text-center font-bold font-heading text-cyan-50">
        Task Management
      </h1>
      <div>
        <AddTaskForm />
      </div>
      {tasks.map((task) => {
        return <TaskCard key={task.id} task={task} onDelete={deleteTask} />;
      })}
    </div>
  );
}
