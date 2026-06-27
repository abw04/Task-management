import type { Task } from "@/modules/task/task.type";
import { TaskCheck } from "@/modules/task/components/task-check";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

export function TaskCard({ task }: { task: Task }) {
  return (
    <div className="px-4 py-2">
      <Card size="sm">
        <CardHeader>
          <CardTitle className="flex gap-2">
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
