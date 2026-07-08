import { SquareX } from "lucide-react";

export function DelButton({
  id,
  onClick,
}: {
  id: number;
  onClick: (id: number) => void;
}) {
  return (
    <SquareX
      className="cursor-pointer"
      color="red"
      onClick={() => onClick(id)}
    />
  );
}
