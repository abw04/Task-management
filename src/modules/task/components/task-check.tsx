import type { Task } from "../task.type";
import { Checkbox } from "@/src/ui/checkbox";

export function TaskCheck({ task }: { task: Task }) {
  return (
    <span>
      <Checkbox checked={task.isCompleted} />{" "}
    </span>
  );
}
