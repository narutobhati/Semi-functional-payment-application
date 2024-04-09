import { useEffect, useState } from "react"
import axios from "axios";
export function Balance(){
    const [balance,setBalance]=useState(0);
    useEffect(()=>{
        axios.get("http://localhost:3000/api/v1/account/balance",{
            headers:{
                Authorization: "Bearer "+ localStorage.getItem("token")
            }
        }).then((response)=>{
            setBalance(response.data.balance)
        })

    },[balance])
    return (
        <div className=" mx-5 my-5 rounded shadow font-sans font-bold text-2xl px-1 py-3">
            Your Balance : RS {balance}
        </div>
    )
}