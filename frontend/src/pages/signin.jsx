import { Bottomwarning } from "../components/bottomwarning"
import { Button } from "../components/button"
import { Heading } from "../components/headng"
import { Inputbox } from "../components/inputbox"
import { Subheading } from "../components/subheading"
import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
export function Signin(){

    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("")
    const navigate=useNavigate();
    return (<div className="flex justify-center">
    <div className="h-auto w-80 my-32 bg-slate-100 rounded-lg" >
            <div>
                <Heading title={"Sign In"}> </Heading>
                <Subheading subheading={"Enter your Credentials to access your account"}></Subheading>
                <Inputbox onchange={(e)=>{
                    setEmail(e.target.value)
                }} tittle={"Email"} placeholder={"xyz@email.com"} type={"email"}></Inputbox>
                <Inputbox  onchange={(e)=>{
                    setPassword(e.target.value)
                }} tittle={"Password"} type={"password"}></Inputbox>
                <Button onclick={async ()=>{const response= await axios.post("https://semi-functional-payment-application-1.onrender.com/api/v1/user/signin",{
                    username:email,
                    password:password
                })
                    localStorage.setItem("token",response.data.token)
                    {if(response.data.flag===true)
                        navigate('/dashboard')
                    }
                }
                } title={"Sign in"}  ></Button>
                <Bottomwarning content={"Don't have an Account?"} todo={"Sign up"} address={"https://semi-functional-payment-application-7z3xe1xcy.vercel.app/signup"}></Bottomwarning>
            </div>
    </div>
    </div>
    )
}