import { useState } from "react"

type InputProp={
    onAdd:(todo:string)=>void;
}

const Input = ({onAdd}:InputProp) => {
    const [input , setInput]=useState<string |null >("")


    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setInput(e.target.value)
       
    }

    const handleSubmit=()=>{
        console.log("submit button clicked")
        if(!input?.trim())  return;
        onAdd(input)
        setInput("")

    }

  return (
    <div>
        <input type="text" value={input?.toString()} placeholder="Add your todos..." className="my-4 border border-black rounded-lg p-2" onChange={handleChange} />
        <button className="border border-gray ml-4 rounded-lg p-2 bg-blue-100 hover:bg-blue-200" onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Input
