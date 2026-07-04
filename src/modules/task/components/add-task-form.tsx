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
import { AddButton } from "@/modules/task/components/add-button";
import { useState } from "react";

export function AddTaskForm({
  onAdd,
}: {
  onAdd: (title: string, description: string) => void;
}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handleAdd(e: React.SubmitEvent) {
    e.preventDefault();

    if (!title.trim() || !description.trim()) {
      return;
    }

    onAdd(title, description);
    setTitle("");
    setDescription("");
  }

  return (
    <form className="flex" onSubmit={handleAdd}>
      <Card className="m-4 gap-4">
        <CardHeader>
          <CardTitle className="text-xl">Add New Task</CardTitle>
        </CardHeader>
        <CardContent className="space-y-1">
          <div className="space-y-2">
            <Label>Title</Label>
            <Input
              type="text"
              placeholder="Task Title"
              className="mx-2"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="space-y-2 my-2">
            <Label>Description</Label>
            <Textarea
              className="ml-2 mt-2 size-120 h-24"
              placeholder="Task Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></Textarea>
          </div>
          <CardAction>
            <AddButton />
          </CardAction>
        </CardContent>
      </Card>
    </form>
  );
}
