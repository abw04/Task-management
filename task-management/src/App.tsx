import { TaskCard } from "./modules/components/task-card";
import { TaskData } from "./modules/task/task.data";

export default function App() {
  return (
    <div>
      <h1>Task Management</h1>
      {TaskData.map((task) =>{
        return <TaskCard key = {task.id} task ={task} />
      })}
    </div>
  );
}
