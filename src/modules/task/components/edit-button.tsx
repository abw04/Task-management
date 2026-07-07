import { SquarePen } from "lucide-react";
// import type { Task } from "../task.type";

export function EditButton({
  id,
  onClick,
}: {
  id: number;
  onClick: (id: number) => void;
}) {
  return <SquarePen className="cursor-pointer" onClick={() => onClick(id)} />;
}
