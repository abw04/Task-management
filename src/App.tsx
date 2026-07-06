import { AddTaskForm } from "@/modules/task/components/add-task-form";
import { TaskCard } from "@/modules/task/components/task-card";
import { tasksData } from "@/modules/task/task.data";
import { useState } from "react";
import type { Task } from "./modules/task/task.type";
// import { EditTaskForm } from "./modules/task/components/edit-form";

export default function App() {
  const [tasks, setTasks] =useState<Task[]>(tasksData)
  // const [editform, setEditForm] =useState(null)

  function addTask(title:string, description:string) {
    const newTask:Task = {
      id: tasksData.length > 0 ? tasksData[tasksData.length-1].id + 1:1,
      title: title,
      description: description,
      isCompleted: false
    }
    setTasks([...tasks, newTask])
  }

  function deleteTask(id:number) {
        setTasks(tasks.filter((task) => task.id !== id));
  }

  // function editTask(targetId:number, title:string, description:string, isCompleted:boolean) {
  //   const editedTask:Task = {
  //     id: targetId,
  //     title: title,
  //     description: description,
  //     isCompleted: isCompleted
  //   }
  //   setTasks(tasks.map((task) => task.id === targetId ? editedTask: task));
  // };

  return (
    <div className="max-w-xl mx-auto bg-cyan-600 min-h-screen">
      <h1 className="text-3xl mx-2 pt-4 text-center font-bold font-heading text-cyan-50">
        Task Management
      </h1>
      <div>
        <AddTaskForm onAdd={addTask}/>
      </div>
      {tasks.map((task) => {
        return <TaskCard key={task.id} task={task} onDelete={deleteTask} 
        // onEdit={editTask}
         />;
      })}
      {/* <div>
        <EditTaskForm />
      </div> */}
    </div>
  );
}
