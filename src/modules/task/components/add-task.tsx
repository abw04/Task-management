import { Button } from "@/src/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/src/ui/card";
import { Textarea } from "@/src/ui/textarea";
import { Input } from "@/src/ui/input";

export function AddTask() {
  return (
    <Card className="m-4 gap-4">
      <CardHeader>
        <CardTitle className="text-xl">Add New Task</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="flex">
          <Input
            type="text"
            placeholder="Task Name"
            className="mx-2"
          />
        </form>
        <Textarea
          className="ml-2 mt-2 size-120 h-24"
          placeholder="Task Description"
        ></Textarea>
      </CardContent>
      <CardAction>
        <Button className="mx-8">Add Task</Button>
      </CardAction>
    </Card>
  );
}
