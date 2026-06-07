import type { Task } from "../task/task.type";
import { TaskCheck } from "./task-check";

export function TaskCard({ task }: { task: Task }) {
  return (
    <div className="border bg-orange-200 p-2 m-2">
      <h2 className="text-xl">
        <TaskCheck task={task} /> {task.title}
      </h2>
      <h3 className="text-sm">{task.description}</h3>
    </div>
  );
}
