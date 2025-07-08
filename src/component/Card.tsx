type CardProps={
    title:string;
}

const Card = ({title}:CardProps) => {
  return (
    <>
      <div className="w-full border border-red ">
        <h1>{title}</h1>
      </div>
      
    </>
  )
}

export default Card
