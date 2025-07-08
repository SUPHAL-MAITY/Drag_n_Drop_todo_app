import { useDraggable } from "@dnd-kit/core"

type CardProps={
    title:string;
    id:number
}

const Card = ({title,id}:CardProps) => {
const { attributes, listeners, setNodeRef, transform } = useDraggable({ id });


const style = {
    transform: `translate(${transform?.x ?? 0}px, ${transform?.y ?? 0}px)`,
    transition: "transform 200ms ease", 
  };



  return (
    <>
      <div className="w-full  " ref={setNodeRef} {...attributes} {...listeners}
      style={{
        ...style,
        backgroundColor: "#fff",
        border: "1px solid #ccc",
        borderRadius: "12px",
        padding: "10px",
        margin: "6px",
        cursor: "grab",  
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",  
        display:"flex",
        justifyContent:"center"
      }}
      >
        <h1 className="font-serif">{title}</h1>
      </div>
      
    </>
  )
}

export default Card
