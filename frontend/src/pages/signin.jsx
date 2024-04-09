import { Bottomwarning } from "../components/bottomwarning"
import { Button } from "../components/button"
import { Heading } from "../components/headng"
import { Inputbox } from "../components/inputbox"
import { Subheading } from "../components/subheading"
export function Signin(){
    return (<div className="flex justify-center">
    <div className="h-auto w-80 my-32 bg-slate-100 rounded-lg" >
            <div>
                <Heading title={"Sign In"}> </Heading>
                <Subheading subheading={"Enter your Credentials to access your account"}></Subheading>
                <Inputbox tittle={"Email"} placeholder={"xyz@email.com"} type={"email"}></Inputbox>
                <Inputbox tittle={"Password"} type={"password"}></Inputbox>
                <Button title={"Sign in"} ></Button>
                <Bottomwarning content={"Don't have an Account?"} todo={"Sign up"} address={"http://localhost:5173/signup"}></Bottomwarning>
            </div>
    </div>
    </div>
    )
}