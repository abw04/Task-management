import type { Task } from "../task.type";

export function TaskCheck({ task }: { task: Task }) {
  return <span>{task.isCompleted ? "✅" : "❌"}</span>;
}
