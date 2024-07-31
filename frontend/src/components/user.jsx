import { useEffect, useState } from "react"
import axios from "axios"
import {useNavigate} from "react-router-dom"
export function User(){
    
    const [user,setUser]=useState([{firstname:"sanchay",lastname:"awana"}])
    const [filter,setFilter]=useState("")
    useEffect( ()=>{
        axios.get("https://semi-functional-payment-application-1.onrender.com/api/v1/user/bulk?filter="+filter).then((response)=>{
            setUser(response.data.user)
        }
       
    )},[filter])
    return(
        <div>
            <div className="mx-6 font-sans font-bold text-2xl px-1 py-1"> Users</div>
            <div className="mx-6">
                <input type="text" onChange={(e)=>{setFilter(e.target.value) }}  placeholder="Search users..." className="w-full border p-1 rounded font-sans font-semibold" />
            </div>
            <div>
            {user.map((user)=>{
                return <Search user={user}></Search>
            })}
            </div>
        </div>
    )
}

function Search({user}){
    const navigate=useNavigate();
    return (
        <div className="flex justify-between mx-6 my-2">
                <div className="flex ">
                    <div className="bg-slate-400 rounded-full py-2.5 px-5 text-xl font-sans font-bold m-1"> {user.firstname[0].toUpperCase()} </div>
                    <div className="font-sans text-xl py-2.5 mx-2 font-semibold">{user.firstname} {user.lastname} </div>
                </div>
               <div> 
                    <button className="bg-black text-white px-2 pb-1 rounded my-3.5 mx-3 text-xl" onClick={()=>{
                        navigate('/sendmoney?id='+user._id+"&firstname="+user.firstname)
                    }}>Send Money</button>
                </div> 
        </div>
    )
}
