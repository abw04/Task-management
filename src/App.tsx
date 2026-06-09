import { AddTask } from "./modules/task/components/add-task";
import { TaskCard } from "./modules/task/components/task-card";
import { tasksData } from "./modules/task/task.data";


export default function App() {
  return (
    <div className="max-w-xl mx-auto bg-[oklch(0.45_0.085_224.283)] min-h-screen">
      <h1 className="text-3xl mx-2 pt-4 text-center font-bold font-heading text-[oklch(0.984_0.019_200.873)]">
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
