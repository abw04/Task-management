import { AddTaskForm } from "@/modules/task/components/add-task-form";
import { TaskCard } from "@/modules/task/components/task-card";
import { tasksData } from "@/modules/task/task.data";

export default function App() {
  return (
    <div className="max-w-xl mx-auto bg-cyan-800 min-h-screen py-4">
      <h1 className="text-3xl mx-2 pt-4 text-center font-bold font-heading text-cyan-50">
        Task Management
      </h1>

      <div>
        <AddTaskForm />
      </div>

      {tasksData.map((task) => {
        return <TaskCard key={task.id} task={task} />;
      })}
    </div>
  );
}
