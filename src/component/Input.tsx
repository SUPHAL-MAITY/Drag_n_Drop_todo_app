import { useState } from "react"



const Input = () => {
    const [input , setInput]=useState<string |null >("Write the task...")
  return (
    <div>
        <input type="text" value={input?.toString()} />
      
    </div>
  )
}

export default Input
