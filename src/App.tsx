import { AddTaskForm } from "@/modules/task/components/add-task-form";
import { TaskCard } from "@/modules/task/components/task-card";
import { tasksData } from "@/modules/task/task.data";
import { useState } from "react";
import type { Task } from "./modules/task/task.type";
import { EditTaskForm } from "./modules/task/components/edit-form";

export default function App() {
  const [tasks, setTasks] = useState<Task[]>(tasksData);
  const [id, setId] = useState<null | number>(null);

  function addTask(title: string, description: string, date: Date, category: string) {
    const newTask: Task = {
      id: tasksData.length > 0 ? tasksData[tasksData.length - 1].id + 1 : 1,
      title: title,
      description: description,
      date: date,
      category: category,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  }

  function deleteTask(id: number) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  function editTask(id: number) {
    setId(id);
  }

  const editedTask: Task | undefined = tasks.find((task) => id == task.id);

  function updateTask(title: string, description: string, date: Date) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, title: title, description: description, date: date };
      } else return task;
    });
    setTasks(updatedTasks);
    setId(null);
  }

  return (
    <div className="max-w-xl mx-auto bg-cyan-600 min-h-screen">
      <h1 className="text-3xl mx-2 pt-4 text-center font-bold font-heading text-cyan-50">
        Task Management
      </h1>
      {editedTask ==undefined &&(
      <div>
        <AddTaskForm onAdd={addTask} />
      </div>
      )}
      {editedTask !== undefined && (
        <div>
          <EditTaskForm onEdit={updateTask} task={editedTask} />
        </div>
      )}
        <h1 className="text-2xl mx-2 p-4 font-bold font-heading text-cyan-50">
        Work Task
      </h1>
      {tasks.map((task) => {
        return (
        task.category == "Work" && (
          <TaskCard
            key={task.id}
            task={task}
            onDelete={deleteTask}
            onEdit={editTask}
          />
          )
        );
      })}
      <h1 className="text-2xl mx-2 p-4 font-bold font-heading text-cyan-50">
        non-Work Task
      </h1>
      {tasks.map((task) => {
        return (
        task.category == "non-Work" && (
          <TaskCard
            key={task.id}
            task={task}
            onDelete={deleteTask}
            onEdit={editTask}
          />
          )
        );
      })}
      {/* <div>
        <AddTaskForm onAdd={addTask} />
      </div>
      {editedTask !== undefined && (
        <div>
          <EditTaskForm onEdit={updateTask} task={editedTask} />
        </div>
      )}
      {workTasks.map((work) => {
        return (
          <TaskCard
            key={work.id}
            task={work}
            onDelete={deleteTask}
            onEdit={editTask}
          />
        );
      })} */}
    </div>
  );
}
