import "./App.css";
import Card from "./component/Card";
import Input from "./component/Input";
import  { useState } from "react";
import {
  DndContext,
  closestCenter,
  useSensor,
  useSensors,
  PointerSensor,
} from "@dnd-kit/core";
import DroppableContainer from "./component/DroppableContainer";
import type { DragEndEvent } from "@dnd-kit/core";

const todoList = [
  { id: 1, todo: "play game", completed: false },
  { id: 2, todo: "create game", completed: true },
  { id: 3, todo: "complete project 1", completed: true },
  { id: 4, todo: "play Gta", completed: false },
  { id: 5, todo: "play game", completed: true },
];

function Todolsit() {
  const sensors = useSensors(useSensor(PointerSensor));
  const [todos, setTodos] = useState(todoList);




  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over) return;

    const draggedTodo = todos.find((t) => t.id === active.id);
    const overContainer = over.id;

    if (
      (overContainer === "completed" && !draggedTodo?.completed) ||
      (overContainer === "incomplete" && draggedTodo?.completed)
    ) {
      setTodos((prev) =>
        prev.map((t) =>
          t.id === active.id ? { ...t, completed: !t.completed } : t
        )
      );
    }
  };



  return (
    <>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <div className="flex flex-col items-center bg-gray-100  min-h-screen ">
          <h1 className="flex  text-3xl text-red-700 font-serif mt-4">
            ToDo List{" "}
          </h1>

          <div className="">
            <Input />
          </div>

          <div className="flex flex-col [@media(min-width:400px)]:flex-row  justify-center items-stretch w-full h-full font-serif">
            {/* not completed todos */}
            <DroppableContainer id="incomplete" title="Have to finish">
              <div className=" w-3/4 [@media(min-width:400px)]:w-1/2 ">
                {todos
                  .filter((todo) => !todo.completed)
                  .map((todo) => (
                    <Card key={todo.id} title={todo.todo} id={todo.id} />
                  ))}
              </div>
            </DroppableContainer>


            {/* completed todos */}
            <DroppableContainer id="completed" title="Completed">
              <div className=" w-3/4 [@media(min-width:400px)]:w-1/2 ">
                {todos
                  .filter((todo) => todo.completed)
                  .map((todo) => (
                    <Card key={todo.id} title={todo.todo} id={todo.id} />
                  ))}
              </div>
            </DroppableContainer>
          </div>
        </div>
      </DndContext>
    </>
  );
}

export default Todolsit;
