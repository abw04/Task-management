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
import {format} from "date-fns"
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Field, FieldLabel } from "@/components/ui/field";

export function AddTaskForm({
  onAdd,
}: {
  onAdd: (title: string, description: string, date: Date) => void;
}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] =useState<Date>()

  function handleAdd(e: React.SubmitEvent) {
    e.preventDefault();

    if (!title.trim() || !description.trim() || !date) {
      return;
    }

    onAdd(title, description,date);
    setTitle("");
    setDescription("");
    setDate(undefined)
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
          <div>
             <Field className="mx-auto w-44">
      <FieldLabel htmlFor="date-picker-simple">Date</FieldLabel>
      <Popover>
        <PopoverTrigger asChild><Button variant="outline" id="date-picker-simple" className="justify-start font-normal">{date ? format(date, "PPP") : <span>Pick date</span>}</Button></PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
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
            <Button>Add Task</Button>
          </CardAction>
        </CardContent>
      </Card>
    </form>
  );
}
