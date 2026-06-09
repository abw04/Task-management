import type { Task } from "../task.type";
import { TaskCheck } from "./task-check";
import { Card, CardHeader, CardTitle } from "@/src/ui/card";

export function TaskCard({ task }: { task: Task }) {
  return (
    <div className="p-2 m-2">
      <Card size="sm">
        <CardHeader>
          <span>
            <TaskCheck task={task} />
            {task.title}
          </span>
        </CardHeader>
        <CardTitle className="mx-4">
          <span>{task.description}</span>
        </CardTitle>
      </Card>
    </div>
  );
}
