import "./App.css";
import Card from "./component/Card";
import Input from "./component/Input";

const todos = [
  { id: 1, todo: "play game", completed: false },
  { id: 2, todo: "create game", completed: true },
  { id: 3, todo: "complete project 1", completed: true },
  { id: 4, todo: "play Gta", completed: false },
  { id: 5, todo: "play game", completed: true },
];

function Todolsit() {
  return (
    <>
      <div className="flex flex-col items-center bg-gray-100  min-h-screen ">
        <h1 className="flex  text-3xl text-red-700 font-serif mt-4">
          ToDo List{" "}
        </h1>

        <div className="">
          <Input />
        </div>

     {/* not completed todos */}
        <div className=" flex jsutify-center item-stretch w-full h-full">
          <div className="border border-black w-1/2 ">
            {todos
              .filter((todo) => !todo.completed)
              .map((todo) => (
                <Card title={todo.todo} />
              ))}
          </div>

        {/* completed todos */}
        
          <div className="border border-black w-1/2 ">
            {todos
              .filter((todo) => todo.completed)
              .map((todo) => (
                <Card title={todo.todo} />
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Todolsit;
