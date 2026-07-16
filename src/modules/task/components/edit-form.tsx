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
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Field, FieldLabel } from "@/components/ui/field";

export function EditTaskForm({
  onEdit,
  task,
}: {
  onEdit: (title: string, description: string, date:Date) => void;
  task: {
    id: number;
    title: string;
    description: string;
    date: Date;
    isCompleted: boolean;
  };
}) {
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [date, setDate] = useState<Date | undefined>(task.date)

  function handleEdit(e: React.SubmitEvent) {
    e.preventDefault();

    if (!title.trim() || !description.trim() || !date) {
      return;
    }

    onEdit(title, description, date);
  }

  return (
    <form className="flex" onSubmit={handleEdit}>
      <Card className="m-4 gap-4">
        <CardHeader>
          <CardTitle className="text-xl">Edit Task</CardTitle>
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
                    <div>
            <Field className="w-44">
              <FieldLabel htmlFor="date-picker-simple">Date</FieldLabel>
              <Popover >
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    id="date-picker-simple"
                    className="justify-start font-normal"
                  >
                    {date ? format(date, "PPP") : <span>Pick date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 " align="start">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    defaultMonth={date}
                  />
                </PopoverContent>
              </Popover>
            </Field>
          </div>
          <CardAction>
            <Button> Edit Task </Button>
          </CardAction>
        </CardContent>
      </Card>
    </form>
  );
}
