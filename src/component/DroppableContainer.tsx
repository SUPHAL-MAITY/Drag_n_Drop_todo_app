import { useDroppable } from "@dnd-kit/core";
import type { ReactNode } from "react";

interface DroppableContainerProps {
  id: string;
  title: string;
  children: ReactNode;
}

const DroppableContainer = ({
  id,
  title,
  children,
}: DroppableContainerProps) => {
  const { setNodeRef, isOver } = useDroppable({ id });

  return (
    <div
      ref={setNodeRef}
      className="w-1/2 border border-black min-h-[200px] p-2 flex flex-col items-center"
      style={{ backgroundColor: isOver ? "#d1fae5" : "#f3f4f6" }}
    >
      <h2 className={`text-xl font-bold mb-2 ${id==="completed"? "text-red-700" :"text-green-500"} `} >{title}</h2>
      {children}
    </div>
  );
};

export default DroppableContainer;
