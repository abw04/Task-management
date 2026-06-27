import { Checkbox } from "@/components/ui/checkbox";

import type { Task } from "@/modules/task/task.type";

export function TaskCheck({ task }: { task: Task }) {
  return (
    <span>
      <Checkbox checked={task.isCompleted} />{" "}
    </span>
  );
}
