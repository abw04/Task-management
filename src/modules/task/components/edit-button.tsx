import { SquarePen } from "lucide-react";
// import type { Task } from "../task.type";

export function EditButton(
  // {id, onClick}:{id:number, onClick: (id:number, targetId:number, title:string, description:string, isCompleted:boolean) => Task}) 
)
{

  return (
    <SquarePen
      className="cursor-pointer"
      // onClick={() => onClick(id, targetId, title, description, isCompleted)}
    />
  );
}
