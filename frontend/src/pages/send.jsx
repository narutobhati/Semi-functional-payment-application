
import { useState } from "react"
import {Button} from "../components/button"
import { Heading } from "../components/headng"
import{Inputbox} from "../components/inputbox"
import { useSearchParams } from "react-router-dom"
import axios from "axios"
export function Sendmoney(){
    const [amount,setAmount]=useState(0)
    const [searchparams]=useSearchParams();
    const id=searchparams.get("id");
    const name=searchparams.get("firstname")
    return(
        <div className="py-40 flex justify-center">
            <div className=" h-auto w-96 pb-3 bg-slate-100 rounded">
                    <Heading title={"Send Money"}></Heading>
                    <div className="flex mx-4 mt-10"> 
                        <div className="bg-slate-400 rounded-full py-2.5 px-4 text-xl font-sans font-bold m-1"> {name[0].toUpperCase()}</div>
                        <div className="font-sans text-xl py-2.5 mx-2 font-semibold">{name}</div>
                    </div>
                    <Inputbox onchange={(e)=>{
                        setAmount(e.target.value)
                    }} tittle={"Amount (in Rs)"} placeholder={"Enter Amount"} type={"number"}></Inputbox>
                    <Button onclick={()=>{
                        axios.post("http://localhost:3000/api/v1/account/transfer",{
                            to:id,
                            amount:amount
                        },{
                            headers:{
                                Authorization: "Bearer "+ localStorage.getItem("token")
                            }
                        })
                    }} title={"Initiate Transfer"}></Button>
                
                   
            </div>
        </div>
    )
}