import { AddTask } from "./modules/task/components/add-task";
import { TaskCard } from "./modules/task/components/task-card";
import { tasksData } from "./modules/task/task.data";


export default function App() {
  return (
    <div className="max-w-xl mx-auto bg-orange-300 min-h-screen">
      <h1 className="text-3xl mx-2 pt-4 text-center font-bold font-heading">
        Task Management
      </h1>
      <div>
      <AddTask/>
      </div>
      {tasksData.map((task) => {
        return <TaskCard key={task.id} task={task} />;
      })}
    </div>
  );
}
