import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function AddTaskForm() {
  return (
    <form className="flex">
      <Card className="m-4 gap-4">
        <CardHeader>
          <CardTitle className="text-xl">Add New Task</CardTitle>
        </CardHeader>
        <CardContent className="space-y-1">
          <div className="space-y-2">
            <Label>Title</Label>
            <Input type="text" placeholder="Task Title" className="mx-2" />
          </div>
          <div className="space-y-2">
            <Label>Description</Label>
            <Textarea
              className="ml-2 mt-2 size-120 h-24"
              placeholder="Task Description"
            ></Textarea>
          </div>
          <CardAction>
            <Button>Add Task</Button>
          </CardAction>
        </CardContent>
      </Card>
    </form>
  );
}
