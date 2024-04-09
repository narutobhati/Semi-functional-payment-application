import { Inputbox } from "../components/inputbox"
import { Heading } from "../components/headng"
import { Subheading } from "../components/subheading"
import { Button } from "../components/button"
import { Bottomwarning } from "../components/bottomwarning"
import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
export function Signup(){
    const [firstname,setFirstname]=useState("");
    const [lastname,setLastname]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("")
    const navigate=useNavigate();
    return (<div className="flex justify-center">
    <div className="h-auto w-80 my-32 bg-slate-100 rounded-lg" >

            <div>
                <Heading title={"Sign Up"}> </Heading>
                <Subheading subheading={"Enter your information to create an account"}></Subheading>
                <Inputbox onchange={(e)=>{
                    setFirstname(e.target.value)
                }} tittle={"First Name"} placeholder={"First Name"}></Inputbox>
                <Inputbox onchange={(e)=>{
                    setLastname(e.target.value)
                }} tittle={"Last Name"} placeholder={"Last Name"}></Inputbox>
                <Inputbox onchange={(e)=>{
                    setEmail(e.target.value)
                }} tittle={"Email"} type={"email"} placeholder={"xyz@email.com"}></Inputbox>
                <Inputbox onchange={(e)=>{
                    setPassword(e.target.value)
                }} tittle={"Password"} type={"password"} ></Inputbox>
                <Button onclick={async ()=>{const response= await axios.post("http://localhost:3000/api/v1/user/signup",{
                    firstname:firstname,
                    lastname:lastname,
                    username:email,
                    password:password
                })
                    localStorage.setItem("token",response.data.token)
                    {if(response.data.flag===true)
                        navigate('/dashboard')
                    }
                }
                } title={"Sign up"} ></Button>
                <Bottomwarning content={"Already have an account?"} todo={"Sign in"} address={"http://localhost:5173/signin"}></Bottomwarning>
            </div>
    </div>
    </div>
    )
}