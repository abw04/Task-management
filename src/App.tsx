import { TaskCard } from "./modules/components/task-card";
import { TaskData } from "./modules/task/task.data";

export default function App() {
  return (
    <div className="max-w-xl mx-auto bg-orange-300 min-h-screen">
      <h1 className = "text-3xl mx-2 py-2 text-center font-bold">Task Management</h1>
      {TaskData.map((task) =>{
        return <TaskCard key = {task.id} task ={task} />
      })}
    </div>
  );
}
