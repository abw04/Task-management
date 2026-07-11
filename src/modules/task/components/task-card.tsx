import type { Task } from "@/modules/task/task.type";
import { TaskCheck } from "@/modules/task/components/task-check";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
  CardContent,
} from "@/components/ui/card";
import { DelButton } from "./del-button";
import { EditButton } from "./edit-button";

export function TaskCard({
  task,
  onDelete,
  onEdit,
}: {
  task: Task;
  onDelete: (id: number) => void;
  onEdit: (id: number) => void;
}) {
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
          <CardContent>
            <span>{task.date.toLocaleDateString()}</span>
            </CardContent>
          <CardAction className="flex">
            {<EditButton id={task.id} onClick={onEdit} />}
            <DelButton id={task.id} onClick={onDelete} />
          </CardAction>
        </CardHeader>
      </Card>
    </div>
  );
}
