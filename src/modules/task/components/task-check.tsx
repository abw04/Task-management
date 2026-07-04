import type { Task } from "@/modules/task/task.type";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";

export function TaskCheck({ task }: { task: Task }) {
  const [check, setCheck] = useState(task.isCompleted);

  function handlecheckTask(checked:boolean) {
    setCheck(checked);
  }

  return (
    <span>
      <Checkbox checked={check} onCheckedChange={ handlecheckTask } />
    </span>
  );
}
