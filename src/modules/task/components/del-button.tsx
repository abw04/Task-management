import { SquareX } from "lucide-react";

export function DelButton({ id, onDelete }: { id: number, onDelete: (id: number) => void}) {

  return (
    <SquareX
      className="cursor-pointer"
      color="red"
      onClick={() => onDelete(id)}
    />
  );
}
