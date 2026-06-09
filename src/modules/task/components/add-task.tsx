import { Button } from "@/src/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/src/ui/card";

export function AddTask() {
  return (
    <Card className="m-4">
      <CardHeader>
        <CardTitle className="text-xl">Add New Task</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="flex">
          <input
            type="text"
            placeholder="Task Name"
            className="mx-2 bg-gray-100"
          />
        </form>
        <form className="flex">
          <input
            type="text"
            placeholder="Task Description"
            className="m-2 bg-gray-100"
          />
        </form>
      </CardContent>
      <CardAction>
        <Button className="mx-8">Add Task</Button>
      </CardAction>
    </Card>
  );
}
