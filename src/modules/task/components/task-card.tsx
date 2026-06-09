import type { Task } from "../task.type";
import { TaskCheck } from "./task-check";
import { Card, CardHeader, CardTitle, CardDescription } from "@/src/ui/card";

export function TaskCard({ task }: { task: Task }) {
  return (
    <div className="p-2 m-2">
      <Card size="sm">
        <CardHeader>
          <CardTitle>
            <TaskCheck task={task} />
            {task.title}
          </CardTitle>
        <CardDescription className="mx-4">
          <span>{task.description}</span>
        </CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
}
