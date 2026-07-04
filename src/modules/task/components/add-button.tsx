import { Button } from "@/components/ui/button";
import { useState } from "react";

export function AddButton() {
  const [count, setCount] = useState(0);

  function handleAddClick() {
    setCount(count + 1);
  }

  return (
    <Button onClick={handleAddClick}>
      Add Task
    </Button>
  );
}
