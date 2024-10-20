
import { useState } from "react"
export default function Button(){

    const[counting, setCount]=useState(0);
    const handleAdd=()=>{
        const added=counting+1  
       setCount(added)
    
    }
    const handleReduce=()=>{
        const remove=counting-1;
        setCount(remove);
    }

    return (
        <div>
        <h1>Hi {counting}</h1>
        <div className="btn-container">
        <button onClick={handleAdd} className="btn">Add</button>
        <button onClick={handleReduce} className="btn">reduce</button>
        </div>
       
        </div>
       

    )
}