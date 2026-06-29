import type { Task } from "../task.type";
import { Checkbox } from "@/components/ui/checkbox";

export function TaskCheck({ task }: { task: Task }) {
  return (
    <span>
      <Checkbox checked={task.isCompleted} />{" "}
    </span>
  );
}
