import type { Task } from "@/modules/task/task.type";
import { TaskCheck } from "@/modules/task/components/task-check";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
} from "@/components/ui/card";
import { DelButton } from "./del-button";

export function TaskCard({ task,onDelete }: { task: Task, onDelete: (id: number) => void} ){
  return (
    <div className="px-4 py-1">
      <Card size="sm">
        <CardHeader>
          <CardTitle className="flex gap-2">
            <TaskCheck task={task} />
            {task.title}
          </CardTitle>
          <CardDescription className="mx-4">
            <span>{task.description}</span>
          </CardDescription>
          <CardAction>
            <DelButton id ={task.id} onDelete = {onDelete} />
          </CardAction>
        </CardHeader>
      </Card>
    </div>
  );
}
