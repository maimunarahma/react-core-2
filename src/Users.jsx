import { useEffect, useState } from "react"
import User from "./User"

export default function Users(){

    const [ allUsers, setUsers]= useState([])
    useEffect(
       ()=>{
        fetch(`https://jsonplaceholder.typicode.com/users`)
        .then(res => res.json())
        .then(data => setUsers(data))
       }
    ,[])
    return(
   <div>
    
        <h1>{allUsers.length}</h1>
    {    allUsers.map( user=>
    //  <User Key={user.id} user={user}/>)
     <User key={user.id} user={user} />)
    }
   </div>

    )
}