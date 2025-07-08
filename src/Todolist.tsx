import "./App.css";
import Card from "./component/Card";
import Input from "./component/Input";
import  {  useState } from "react";
import {
  DndContext,
  closestCenter,
  useSensor,
  useSensors,
  PointerSensor,
  TouchSensor
} from "@dnd-kit/core";
import DroppableContainer from "./component/DroppableContainer";
import type { DragEndEvent } from "@dnd-kit/core";

// const todoList = [
//   { id: 1, todo: "play game", completed: false },
//   { id: 2, todo: "create game", completed: true },
//   { id: 3, todo: "complete project 1", completed: true },
//   { id: 4, todo: "play Gta", completed: false },
//   { id: 5, todo: "play game", completed: true },
// ];


type Todo={
    id:number;
    todo:string;
    completed:boolean;
}




function Todolsit() {
    const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } }), // For mouse
    useSensor(TouchSensor, {
      activationConstraint: { delay: 200, tolerance: 5 },
    }) // For touch
  );
  
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos") || "[]"));

 


  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over) return;

    const draggedTodo = todos.find((t:Todo) => t.id === active.id);
    const overContainer = over.id;

    if (
      (overContainer === "completed" && !draggedTodo?.completed) ||
      (overContainer === "incomplete" && draggedTodo?.completed)
    ) {
      setTodos((prev:Todo[]) =>{
        const updated= prev.map((t) =>
          t.id === active.id ? { ...t, completed: !t.completed } : t
        )
        localStorage.setItem("todos",JSON.stringify(updated))
        return updated;

      }
       
      );
     
    }
  };


  const handleAddTodo=(todo:string)=>{
    const newTodo={
        todo,
        completed:false,
        id:Math.ceil(Math.random() * 100),
    }
    const updatedTodos=[...todos,newTodo]
    setTodos(updatedTodos)
    
    localStorage.setItem("todos",JSON.stringify(updatedTodos))

    
  }
 

  const handleReset=()=>{
    localStorage.removeItem("todos")
    window.location.reload()
  }

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

          <div className="absolute right-[2px] top-[8px] "><button className="border border-red-300 p-2 bg-red-500 rounded-lg" onClick={handleReset}>Reset</button></div>

          <div className="">
            <Input  onAdd={handleAddTodo} />
          </div>

          <div className="flex flex-col [@media(min-width:400px)]:flex-row  justify-center items-stretch w-full h-full font-serif">
            {/* not completed todos */}
            <DroppableContainer id="incomplete" title="Have to finish">
              <div className=" w-3/4 [@media(min-width:400px)]:w-1/2 ">
                {todos
                  .filter((todo:Todo) => !todo.completed)
                  .map((todo:Todo) => (
                    <Card key={todo.id} title={todo.todo} id={todo.id} />
                  ))}
              </div>
            </DroppableContainer>


            {/* completed todos */}
            <DroppableContainer id="completed" title="Completed">
              <div className=" w-3/4 [@media(min-width:400px)]:w-1/2 ">
                {todos
                  .filter((todo:Todo) => todo.completed)
                  .map((todo:Todo) => (
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
