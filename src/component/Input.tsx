import { useState } from "react"



const Input = () => {
    const [input , setInput]=useState<string |null >("")


    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setInput(e.target.value)
    }

  return (
    <div>
        <input type="text" value={input?.toString()} placeholder="Add your todos..." className="my-4 border border-black rounded-lg p-2" onChange={handleChange} />
      
    </div>
  )
}

export default Input
