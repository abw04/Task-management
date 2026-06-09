import { AddTask } from "./modules/task/components/add-task";
import { TaskCard } from "./modules/task/components/task-card";
import { tasksData } from "./modules/task/task.data";


export default function App() {
  return (
    <div className="max-w-xl mx-auto bg-orange-300 min-h-screen">
      <div>
      <AddTask/>
      </div>
      {tasksData.map((task) => {
        return <TaskCard key={task.id} task={task} />;
      })}
    </div>
  );
}
