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
                <Button onclick={async ()=>{const response= await axios.post("http://localhost:3000/api/v1/user/signin",{
                    username:email,
                    password:password
                })
                    localStorage.setItem("token",response.data.token)
                    {if(response.data.flag===true)
                        navigate('/dashboard')
                    }
                }
                } title={"Sign in"}  ></Button>
                <Bottomwarning content={"Don't have an Account?"} todo={"Sign up"} address={"http://localhost:5173/signup"}></Bottomwarning>
            </div>
    </div>
    </div>
    )
}